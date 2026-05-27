import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MAP_EMBED_URL, CONTACT_INFO } from '../data/constants';
import { PageHeader } from '../components/PageHeader';
import { useSiteSettings } from '../context/SiteContext';
import api from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export function Contact() {
  const { settings } = useSiteSettings();
  const phone    = settings?.phone    || CONTACT_INFO.phone;
  const whatsapp = settings?.whatsapp || CONTACT_INFO.whatsapp;
  const email    = settings?.email    || CONTACT_INFO.email;
  const address  = settings?.address  || CONTACT_INFO.address;

  const [formData, setFormData] = useState({
    nom: '', prenom: '', telephone: '', email: '', type: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [error, setError]         = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildWhatsAppMessage = (data) => {
    const typeLabels = {
      rdv: 'Prise de rendez-vous',
      info: "Demande d'information",
      sst: 'Santé au travail / Entreprise',
      autre: 'Autre',
    };
    const lines = [
      '📋 *Nouvelle demande – Cabinet Médical Lionel*',
      '',
      `👤 *Nom :* ${data.nom}${data.prenom ? ' ' + data.prenom : ''}`,
      data.telephone ? `📞 *Téléphone :* ${data.telephone}` : null,
      `✉️ *Email :* ${data.email}`,
      data.type ? `📌 *Type :* ${typeLabels[data.type] || data.type}` : null,
      '',
      `💬 *Message :*`,
      data.message,
    ].filter(Boolean);
    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      await api.post(`${API_URL}/contact`, formData);
      setSubmitted(true);
      // Ouvrir WhatsApp avec le message pré-rempli
      const msg = buildWhatsAppMessage(formData);
      window.open(`https://wa.me/${whatsapp}?text=${msg}`, '_blank', 'noopener,noreferrer');
    } catch {
      setError("Une erreur s'est produite. Veuillez réessayer ou nous contacter par téléphone.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="inner-page">
      <PageHeader
        title="Contactez-nous"
        subtitle="Notre équipe médicale est à votre écoute du lundi au samedi."
        breadcrumbLabel="Contact"
      />

      {/* Bande de contact rapide */}
      <div className="contact-strip">
        <Container>
          <Row className="g-0 justify-content-center">
            <Col xs={12} md={4} className="contact-strip__item">
              <a href={`tel:+${whatsapp}`} className="contact-strip__link">
                <span className="contact-strip__icon">
                  <i className="bi bi-telephone-fill" />
                </span>
                <div>
                  <div className="contact-strip__label">Téléphone</div>
                  <div className="contact-strip__value">{phone}</div>
                </div>
              </a>
            </Col>
            <Col xs={12} md={4} className="contact-strip__item contact-strip__item--center">
              <a
                href={`https://wa.me/${whatsapp}`}
                className="contact-strip__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-strip__icon contact-strip__icon--wa">
                  <i className="bi bi-whatsapp" />
                </span>
                <div>
                  <div className="contact-strip__label">WhatsApp</div>
                  <div className="contact-strip__value">Écrire un message</div>
                </div>
              </a>
            </Col>
            <Col xs={12} md={4} className="contact-strip__item">
              <a href={`mailto:${email}`} className="contact-strip__link">
                <span className="contact-strip__icon contact-strip__icon--mail">
                  <i className="bi bi-envelope-fill" />
                </span>
                <div>
                  <div className="contact-strip__label">E-mail</div>
                  <div className="contact-strip__value">{email}</div>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Formulaire + Infos */}
      <section className="py-5">
        <Container>
          <Row className="g-5 align-items-start">

            {/* Colonne gauche — Formulaire */}
            <Col lg={7} data-aos="fade-up">
              <div className="contact-form-card p-4 p-lg-5 rounded-4 shadow-sm">
                <div className="mb-4">
                  <h2 className="h4 fw-bold mb-1">Envoyer un message</h2>
                  <p className="text-secondary small mb-0">
                    Remplissez le formulaire, nous vous répondrons rapidement.
                  </p>
                </div>

                {submitted ? (
                  <div className="contact-success text-center py-5">
                    <div className="contact-success__icon mx-auto mb-3">
                      <i className="bi bi-check-lg" />
                    </div>
                    <h3 className="h5 fw-bold mb-2">Message envoyé !</h3>
                    <p className="text-secondary mb-2">
                      Merci pour votre message. WhatsApp s'est ouvert avec vos informations.
                    </p>
                    <p className="text-secondary small mb-4">
                      Si la fenêtre WhatsApp ne s'est pas ouverte,{' '}
                      <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-success fw-semibold"
                      >
                        cliquez ici
                      </a>.
                    </p>
                    <Button
                      variant="outline-primary"
                      className="rounded-pill px-4"
                      onClick={() => { setSubmitted(false); setFormData({ nom: '', prenom: '', telephone: '', email: '', type: '', message: '' }); setError(null); }}
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <>
                  {error && (
                    <div className="alert alert-danger rounded-3 mb-3 small">{error}</div>
                  )}
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Label className="contact-form-label">Nom *</Form.Label>
                        <Form.Control
                          type="text"
                          name="nom"
                          placeholder="Votre nom"
                          required
                          value={formData.nom}
                          onChange={handleChange}
                          className="contact-form-input"
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Label className="contact-form-label">Prénom</Form.Label>
                        <Form.Control
                          type="text"
                          name="prenom"
                          placeholder="Votre prénom"
                          value={formData.prenom}
                          onChange={handleChange}
                          className="contact-form-input"
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Label className="contact-form-label">Téléphone</Form.Label>
                        <Form.Control
                          type="tel"
                          name="telephone"
                          placeholder="Ex : 77 000 00 00"
                          value={formData.telephone}
                          onChange={handleChange}
                          className="contact-form-input"
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Label className="contact-form-label">Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="votre@email.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="contact-form-input"
                        />
                      </Col>
                      <Col md={12}>
                        <Form.Label className="contact-form-label">Type de demande</Form.Label>
                        <Form.Select
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          className="contact-form-input"
                        >
                          <option value="">— Choisir une option —</option>
                          <option value="rdv">Prise de rendez-vous</option>
                          <option value="info">Demande d'information</option>
                          <option value="sst">Santé au travail / Entreprise</option>
                          <option value="autre">Autre</option>
                        </Form.Select>
                      </Col>
                      <Col md={12}>
                        <Form.Label className="contact-form-label">Message *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre demande..."
                          className="contact-form-input"
                        />
                      </Col>
                      <Col md={12}>
                        <div className="d-flex gap-3 align-items-center flex-wrap pt-1">
                          <Button type="submit" variant="primary" size="lg" className="rounded-pill px-5 fw-semibold" disabled={sending}>
                            {sending
                              ? <><span className="spinner-border spinner-border-sm me-2" />Envoi...</>
                              : <><i className="bi bi-send-fill me-2" />Envoyer</>
                            }
                          </Button>
                          <a
                            href={`https://wa.me/${whatsapp}`}
                            className="btn btn-outline-success btn-lg rounded-pill px-4"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-whatsapp me-2" />
                            WhatsApp
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                  </>
                )}
              </div>
            </Col>

            {/* Colonne droite — Infos */}
            <Col lg={5} data-aos="fade-up" data-aos-delay="80">
              {/* Horaires */}
              <div className="contact-info-block rounded-4 p-4 mb-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="contact-info-block__icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-clock-fill" />
                  </span>
                  <h3 className="h6 fw-bold mb-0 text-uppercase tracking-wide">Horaires d'ouverture</h3>
                </div>
                <div className="contact-hours">
                  <div className="contact-hours__row">
                    <span>Lundi – Vendredi</span>
                    <span className="fw-semibold">8h00 – 18h00</span>
                  </div>
                  <div className="contact-hours__row">
                    <span>Samedi</span>
                    <span className="fw-semibold">8h00 – 13h00</span>
                  </div>
                  <div className="contact-hours__row contact-hours__row--closed">
                    <span>Dimanche</span>
                    <span className="fw-semibold">Fermé</span>
                  </div>
                </div>
              </div>

              {/* Adresse */}
              <div className="contact-info-block rounded-4 p-4 mb-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="contact-info-block__icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-geo-alt-fill" />
                  </span>
                  <h3 className="h6 fw-bold mb-0 text-uppercase">Notre adresse</h3>
                </div>
                <p className="text-secondary mb-3 lh-lg">
                  {address}
                </p>
                <a
                  href="https://maps.google.com/maps?q=Hann+Mariste+2,+Keur+Ngor,+Dakar,+Senegal"
                  className="btn btn-sm btn-outline-primary rounded-pill px-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-map me-1" />
                  Itinéraire
                </a>
              </div>

              {/* Contact direct */}
              <div className="contact-info-block rounded-4 p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="contact-info-block__icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-headset" />
                  </span>
                  <h3 className="h6 fw-bold mb-0 text-uppercase">Contact direct</h3>
                </div>
                <a
                  href={`tel:+${whatsapp}`}
                  className="contact-direct-link d-flex align-items-center gap-2 mb-2"
                >
                  <i className="bi bi-telephone text-primary" />
                  <span>{phone}</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="contact-direct-link d-flex align-items-center gap-2"
                >
                  <i className="bi bi-envelope text-primary" />
                  <span>{email}</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Carte Google Maps — pleine largeur */}
      <section className="pb-5">
        <Container data-aos="fade-up">
          <div className="contact-map-wrapper rounded-4 overflow-hidden shadow-sm">
            <div className="contact-map-header px-4 py-3 d-flex align-items-center gap-2 flex-wrap">
              <i className="bi bi-geo-alt-fill text-primary fs-5" />
              <div>
                <span className="fw-semibold">Cabinet Médical Lionel</span>
                <span className="text-secondary small ms-2">— Hann Mariste 2, Keur Ngor, Dakar</span>
              </div>
              <a
                href="https://maps.google.com/maps?q=Hann+Mariste+2,+Keur+Ngor,+Dakar,+Senegal"
                className="btn btn-sm btn-outline-primary rounded-pill ms-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-box-arrow-up-right me-1" />
                Ouvrir dans Maps
              </a>
            </div>
            <iframe
              title="Localisation Cabinet Médical Lionel"
              src={MAP_EMBED_URL}
              className="contact-map w-100 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
