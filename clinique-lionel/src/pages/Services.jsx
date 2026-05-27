import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CONTACT_INFO, SERVICES } from '../data/constants';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';

const serviceIcons = [
  'bi-heart-pulse',
  'bi-bandaid',
  'bi-camera',
  'bi-shield-check',
  'bi-clipboard2-heart',
  'bi-mortarboard',
];

export function Services() {
  return (
    <div className="inner-page">
      <SEO
        path="/services"
        title="Nos Services Médicaux – Médecine du Travail, Soins, Imagerie à Dakar"
        description="Découvrez les services du Cabinet Médical Lionel à Hann Mariste, Dakar : médecine générale, soins infirmiers, imagerie médicale, santé au travail, prévention et formations SST. Consultations et visites sur site."
      />
      <PageHeader
        title="Nos Services"
        subtitle="Une prise en charge complète, de la médecine générale à la santé au travail."
        breadcrumbLabel="Services"
      />

      {/* Intro */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={7} data-aos="fade-up">
              <p className="text-primary fw-semibold text-uppercase small letter-spacing-wide mb-2">
                Offre de soins
              </p>
              <h2 className="display-6 fw-bold mb-3">Une prise en charge globale</h2>
              <p className="text-secondary lead-sm">
                Notre cabinet, c'est plus qu'un lieu de soins : c'est un espace d'écoute,
                de confiance et d'accompagnement pour toute la famille et les entreprises.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services — alternating */}
      {SERVICES.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={service.title}
            className={`py-5 py-lg-6 ${!isEven ? 'bg-light' : ''}`}
          >
            <Container>
              <Row
                className={`align-items-center g-5 ${!isEven ? 'flex-lg-row-reverse' : ''}`}
              >
                {/* Image */}
                <Col lg={6} data-aos={isEven ? 'fade-right' : 'fade-left'}>
                  <div className="service-img-wrap rounded-4 overflow-hidden shadow-lg position-relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-img w-100"
                    />
                    <div className="service-img__number">{String(index + 1).padStart(2, '0')}</div>
                  </div>
                </Col>

                {/* Texte */}
                <Col
                  lg={6}
                  data-aos={isEven ? 'fade-left' : 'fade-right'}
                  data-aos-delay="80"
                >
                  <span className="service-icon-badge rounded-circle d-inline-flex align-items-center justify-content-center mb-4">
                    <i className={`bi ${serviceIcons[index]} fs-4`} aria-hidden="true" />
                  </span>
                  <h2 className="h2 fw-bold mb-3">{service.title}</h2>
                  <p className="text-secondary lead-sm mb-4">{service.description}</p>
                  <div className="d-flex gap-3 flex-wrap">
                    <Button
                      as={Link}
                      to="/contact"
                      variant="primary"
                      className="rounded-pill px-4"
                    >
                      Prendre rendez-vous
                    </Button>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                      className="btn btn-outline-success rounded-pill px-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-whatsapp me-2" />
                      WhatsApp
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-5">
        <Container data-aos="fade-up">
          <div className="home-cta-card rounded-4 p-5 text-center">
            <h2 className="display-6 fw-bold text-white mb-3">
              Besoin d'une consultation ?
            </h2>
            <p className="text-white-50 lead-sm mb-4 mx-auto" style={{ maxWidth: '500px' }}>
              Notre équipe est disponible du lundi au samedi pour répondre à toutes vos
              questions et organiser votre prise en charge.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a
                href={`tel:+${CONTACT_INFO.whatsapp}`}
                className="btn btn-primary btn-lg rounded-pill px-5 fw-semibold"
              >
                <i className="bi bi-telephone-fill me-2" />
                {CONTACT_INFO.phone}
              </a>
              <Button as={Link} to="/contact" variant="outline-light" size="lg" className="rounded-pill px-5">
                Nous écrire
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
