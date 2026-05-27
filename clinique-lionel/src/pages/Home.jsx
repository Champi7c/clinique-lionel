import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ABOUT_IMAGE, CONTACT_INFO, MAP_EMBED_URL, PARTNERS, SERVICES } from '../data/constants';
import { HeroSection } from '../components/HeroSection';
import { StatsCounter } from '../components/StatsCounter';
import { SectionTitle } from '../components/SectionTitle';
import { SEO } from '../components/SEO';
import { useApi } from '../hooks/useApi';
import { fetchServices, fetchPartners } from '../lib/api';
import { useSiteSettings } from '../context/SiteContext';

const features = [
  { icon: 'bi-shield-check', text: 'Personnel médical qualifié et expérimenté' },
  { icon: 'bi-heart-pulse', text: 'Prise en charge globale : travail & quotidien' },
  { icon: 'bi-calendar2-check', text: 'Rendez-vous rapides, accueil personnalisé' },
];

export function Home() {
  const { data: apiServices } = useApi(fetchServices, null);
  const { data: apiPartners } = useApi(fetchPartners, null);
  const { settings }          = useSiteSettings();

  const services = apiServices?.length
    ? apiServices.map(s => ({ title: s.title, description: s.description, image: s.image_url }))
    : SERVICES;

  const partnerNames = apiPartners?.length
    ? apiPartners.map(p => p.name)
    : PARTNERS;

  const aboutImage = settings?.about_image_url || ABOUT_IMAGE;
  const phone      = settings?.phone    || CONTACT_INFO.phone;
  const whatsapp   = settings?.whatsapp || CONTACT_INFO.whatsapp;

  return (
    <div className="home-page">
      <SEO
        path="/"
        title="Santé au Travail & Soins Cliniques à Dakar"
        description="Cabinet Médical Lionel – Votre partenaire SST à Hann Mariste 2, Keur Ngor, Dakar. Médecine du travail, soins cliniques, prévention des risques professionnels et formations SST. Agréé État sénégalais depuis 2022. 80+ entreprises partenaires."
      />

      {/* ── Hero full-screen ── */}
      <HeroSection />

      {/* ── Statistiques ── */}
      <StatsCounter />

      {/* ── À propos ── */}
      <section className="py-5 py-lg-6">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={5} data-aos="fade-right">
              <div className="home-about__img-wrap position-relative">
                <img
                  src={aboutImage}
                  alt="Équipe médicale Cabinet Médical Lionel"
                  className="img-fluid rounded-4 shadow-lg w-100"
                  style={{ objectFit: 'cover', maxHeight: '520px' }}
                />
                <div className="home-about__badge rounded-4 shadow-lg p-3 d-flex align-items-center gap-3">
                  <span className="home-about__badge-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-award-fill fs-5" />
                  </span>
                  <div>
                    <div className="fw-bold text-white lh-1">Depuis 2022</div>
                    <div className="small text-white-50">Autorisé par l'État</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7} data-aos="fade-left" data-aos-delay="80">
              <p className="text-primary fw-semibold text-uppercase small letter-spacing-wide mb-2">
                Qui sommes-nous
              </p>
              <h2 className="display-6 fw-bold mb-4">
                Protéger la santé au travail, soigner la vie au quotidien.
              </h2>
              <p className="text-secondary lead-sm mb-4">
                Le Cabinet Médical Lionel est un établissement médical basé à Hann Mariste 2,
                Keur Ngor — Dakar. Nous unissons la médecine du travail et les soins cliniques
                pour offrir une approche globale de la santé : prévenir, soigner et accompagner
                chaque individu dans sa vie professionnelle et personnelle.
              </p>
              <ul className="list-unstyled mb-5">
                {features.map((f) => (
                  <li key={f.text} className="d-flex align-items-center gap-3 mb-3">
                    <span className="home-feature-icon rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                      <i className={`bi ${f.icon}`} />
                    </span>
                    <span className="fw-medium">{f.text}</span>
                  </li>
                ))}
              </ul>
              <div className="d-flex gap-3 flex-wrap">
                <Button as={Link} to="/contact" variant="primary" className="rounded-pill px-4">
                  Nous contacter
                </Button>
                <Button as={Link} to="/services" variant="outline-primary" className="rounded-pill px-4">
                  Nos services
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Services ── */}
      <section className="py-5 py-lg-6 bg-light">
        <Container>
          <SectionTitle
            eyebrow="Expertise médicale"
            title="Nos Services"
            description="De la médecine générale à la santé au travail, nous vous accompagnons à chaque étape."
          />
          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={4} key={service.title} data-aos="fade-up" data-aos-delay={index * 60}>
                <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100 home-service-card">
                  <div className="home-service-card__img-wrap">
                    <Card.Img src={service.image} alt={service.title} className="home-service-card__img" />
                  </div>
                  <Card.Body className="p-4 d-flex flex-column">
                    <Card.Title as="h3" className="h5 fw-bold mb-2">{service.title}</Card.Title>
                    <Card.Text className="text-secondary small flex-grow-1 mb-3">{service.description}</Card.Text>
                    <Link to="/services" className="text-primary fw-semibold small d-inline-flex align-items-center gap-1">
                      En savoir plus <i className="bi bi-arrow-right" aria-hidden="true" />
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── Partenaires ── */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-4" data-aos="fade-up">
            <p className="text-primary fw-semibold text-uppercase small letter-spacing-wide mb-1">
              Ils nous font confiance
            </p>
            <h2 className="h3 fw-bold">Nos Partenaires</h2>
          </div>
        </Container>
        <div className="partners-marquee-wrap" data-aos="fade-up" data-aos-delay="60">
          <div className="partners-track">
            {[...partnerNames, ...partnerNames].map((name, i) => (
              <div className="partners-item" key={i}>
                <span className="partners-item__abbr">
                  {name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase().slice(0, 2)}
                </span>
                <span className="partners-item__name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Rendez-vous ── */}
      <section className="py-5">
        <Container data-aos="fade-up">
          <div className="home-cta-card rounded-4 p-5 text-center">
            <span className="badge rounded-pill text-bg-primary mb-3 px-3 py-2">
              Disponible Lun – Sam
            </span>
            <h2 className="display-6 fw-bold text-white mb-3">
              Besoin d'une consultation ?
            </h2>
            <p className="text-white-50 lead-sm mb-4 mx-auto" style={{ maxWidth: '520px' }}>
              Prenez rendez-vous par téléphone ou via WhatsApp. Notre équipe vous accueille
              du lundi au vendredi de 8h à 18h, et le samedi de 8h à 13h.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href={`tel:+${whatsapp}`} className="btn btn-primary btn-lg rounded-pill px-5 fw-semibold">
                <i className="bi bi-telephone-fill me-2" />
                {phone}
              </a>
              <a
                href={`https://wa.me/${whatsapp}`}
                className="btn btn-outline-light btn-lg rounded-pill px-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp me-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Localisation ── */}
      <section className="py-5 bg-light">
        <Container>
          <SectionTitle eyebrow="Localisation" title="Nous trouver" />
          <div className="contact-map-wrapper rounded-4 overflow-hidden shadow-sm" data-aos="fade-up">
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
              title="Carte Cabinet Médical Lionel - Hann Mariste 2, Keur Ngor"
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
