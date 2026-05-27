import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageHeader } from '../components/PageHeader';
import { CONTACT_INFO } from '../data/constants';
import { SEO } from '../components/SEO';

const sstDomains = [
  {
    icon: 'bi-heart-pulse',
    color: 'primary',
    title: 'Santé au Travail & Services Médicaux',
    description:
      "Suivi médical complet des travailleurs, de l'embauche à la retraite, avec une approche préventive et curative adaptée à chaque secteur.",
    items: [
      "Visites médicales d'embauche, périodiques et de reprise",
      'Surveillance biologique et paraclinique',
      "Monitoring de toxiques et métrologie d'ambiance",
      'Soins et visites sur site, évacuation sanitaire',
      'Campagnes de prévention, dépistage et vaccination',
      'Vente et location de matériel médical et EPI',
    ],
  },
  {
    icon: 'bi-clipboard2-check',
    color: 'success',
    title: 'Conseil, Prévention & Audit SST',
    description:
      'Identification et maîtrise des risques professionnels pour une conformité réglementaire et une culture sécurité durable.',
    items: [
      'Évaluation des risques professionnels (DUER, RPS, ergonomie…)',
      'Audit de conformité réglementaire',
      'Accompagnement ISO 45001',
      "Analyse d'accidents et d'incidents",
      'Plans de prévention et politiques SST',
      'Assistance aux comités CHS / CSE',
    ],
  },
  {
    icon: 'bi-mortarboard',
    color: 'warning',
    title: 'Formation & Management SST',
    description:
      'Développement des compétences et de la culture sécurité pour des équipes sensibilisées et responsabilisées.',
    items: [
      'Formation SST, secourisme et sécurité incendie',
      'Sensibilisation : manutention, ergonomie, addictions',
      'Management participatif SST',
      'Création de tableaux de bord et indicateurs',
      'Accompagnement à la certification SST',
      'Plateforme e-learning et outils digitaux',
    ],
  },
];

const engagements = [
  {
    icon: 'bi-patch-check-fill',
    title: 'Expertise reconnue',
    text: "Agréé par l'État sénégalais depuis 2022, notre équipe allie compétences médicales et expertise SST.",
  },
  {
    icon: 'bi-building-check',
    title: 'Intervention sur site',
    text: 'Nous intervenons directement dans vos locaux pour les visites, formations et audits sans interruption de votre activité.',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Approche sur-mesure',
    text: 'Chaque entreprise est unique. Nos solutions sont adaptées à votre secteur, vos effectifs et vos contraintes.',
  },
  {
    icon: 'bi-shield-fill-check',
    title: 'Conformité garantie',
    text: 'Nous vous accompagnons vers la pleine conformité aux réglementations SST nationales et aux normes ISO.',
  },
];

const sectors = [
  { icon: 'bi-water', name: 'Maritime / Portuaire' },
  { icon: 'bi-cone-striped', name: 'BTP' },
  { icon: 'bi-lightning-charge', name: 'Énergie / Mines' },
  { icon: 'bi-truck', name: 'Transport / Logistique' },
  { icon: 'bi-droplet', name: 'Agroalimentaire / Chimie' },
  { icon: 'bi-grid', name: 'Tous secteurs' },
];

export function SanteTravail() {
  return (
    <div className="inner-page">
      <SEO
        path="/sante-travail"
        title="Santé et Sécurité au Travail (SST) – Dakar, Sénégal"
        description="Cabinet LIONEL SST – Expert en santé et sécurité au travail à Dakar. Médecine du travail, audit SST, évaluation des risques professionnels (DUER), accompagnement ISO 45001, formations SST. Intervient dans tous les secteurs au Sénégal."
      />
      <PageHeader
        badge="Cabinet de Consultance LIONEL SST"
        title="Santé & Sécurité au Travail"
        subtitle="Votre partenaire de confiance pour protéger vos équipes, prévenir les risques et assurer la conformité de votre entreprise."
        breadcrumbLabel="Santé du travail"
      />

      {/* Intro + chiffres */}
      <section className="py-5 py-lg-6">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} data-aos="fade-right">
              <p className="text-primary fw-semibold text-uppercase small letter-spacing-wide mb-2">
                Qui sommes-nous
              </p>
              <h2 className="display-6 fw-bold mb-4">
                Un cabinet spécialisé en SST, à votre service
              </h2>
              <p className="text-secondary lead-sm mb-4">
                Le Cabinet LIONEL SST propose une offre intégrée en santé et sécurité au
                travail : suivi médical des travailleurs, prévention des risques
                professionnels, formations réglementaires et conseil en management SST.
              </p>
              <p className="text-secondary lead-sm mb-5">
                Nous intervenons auprès des entreprises de toutes tailles dans les secteurs
                industriels, portuaires, du BTP, de l'énergie et bien d'autres.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button as={Link} to="/contact" variant="primary" className="rounded-pill px-4">
                  Demander un devis
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
            <Col lg={6} data-aos="fade-left" data-aos-delay="80">
              <Row className="g-3">
                {[
                  { value: '80+', label: 'Entreprises partenaires', icon: 'bi-building' },
                  { value: '2022', label: 'Agréé par l\'État sénégalais', icon: 'bi-patch-check' },
                  { value: '3', label: 'Domaines d\'expertise SST', icon: 'bi-layers' },
                  { value: '100%', label: 'Sur-mesure & personnalisé', icon: 'bi-stars' },
                ].map((stat) => (
                  <Col xs={6} key={stat.label}>
                    <div className="sst-stat-card rounded-4 p-4 h-100">
                      <i className={`bi ${stat.icon} text-primary fs-4 mb-2 d-block`} />
                      <div className="sst-stat-card__value">{stat.value}</div>
                      <div className="sst-stat-card__label">{stat.label}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3 Domaines SST */}
      <section className="py-5 py-lg-6 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={7} data-aos="fade-up">
              <p className="text-primary fw-semibold text-uppercase small letter-spacing-wide mb-2">
                Nos prestations
              </p>
              <h2 className="display-6 fw-bold">3 domaines d'intervention</h2>
            </Col>
          </Row>
          <Row className="g-4">
            {sstDomains.map((domain, index) => (
              <Col lg={4} md={6} key={domain.title} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="sst-domain-card rounded-4 h-100 p-4">
                  <div className={`sst-domain-card__icon sst-domain-card__icon--${domain.color} rounded-circle d-inline-flex align-items-center justify-content-center mb-4`}>
                    <i className={`bi ${domain.icon} fs-4`} aria-hidden="true" />
                  </div>
                  <h3 className="h5 fw-bold mb-2">{domain.title}</h3>
                  <p className="text-secondary small mb-4">{domain.description}</p>
                  <ul className="list-unstyled mb-0">
                    {domain.items.map((item) => (
                      <li key={item} className="d-flex align-items-start gap-2 mb-2 small text-secondary">
                        <i className="bi bi-check2-circle text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Engagements */}
      <section className="py-5 py-lg-6">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={7} data-aos="fade-up">
              <p className="text-primary fw-semibold text-uppercase small letter-spacing-wide mb-2">
                Pourquoi nous choisir
              </p>
              <h2 className="display-6 fw-bold">Nos engagements</h2>
            </Col>
          </Row>
          <Row className="g-4">
            {engagements.map((item, index) => (
              <Col md={6} lg={3} key={item.title} data-aos="fade-up" data-aos-delay={index * 60}>
                <div className="sst-engagement rounded-4 p-4 text-center h-100">
                  <div className="sst-engagement__icon rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3">
                    <i className={`bi ${item.icon} fs-4`} aria-hidden="true" />
                  </div>
                  <h4 className="h6 fw-bold mb-2">{item.title}</h4>
                  <p className="text-secondary small mb-0">{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Secteurs */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={7} data-aos="fade-up">
              <p className="text-primary fw-semibold text-uppercase small letter-spacing-wide mb-2">
                Secteurs d'intervention
              </p>
              <h2 className="display-6 fw-bold">Nous intervenons dans votre secteur</h2>
            </Col>
          </Row>
          <Row className="g-3 justify-content-center">
            {sectors.map((sector, index) => (
              <Col xs={6} md={4} lg={2} key={sector.name} data-aos="zoom-in" data-aos-delay={index * 40}>
                <div className="sst-sector rounded-4 p-3 text-center h-100">
                  <i className={`bi ${sector.icon} text-primary fs-3 mb-2 d-block`} />
                  <span className="small fw-semibold">{sector.name}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5">
        <Container data-aos="fade-up">
          <div className="home-cta-card rounded-4 p-5 text-center">
            <h2 className="display-6 fw-bold text-white mb-3">
              Prêt à améliorer votre SST ?
            </h2>
            <p className="text-white-50 lead-sm mb-4 mx-auto" style={{ maxWidth: '500px' }}>
              Contactez-nous dès aujourd'hui pour une consultation personnalisée et un devis
              adapté à votre entreprise.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button as={Link} to="/contact" variant="primary" size="lg" className="rounded-pill px-5 fw-semibold">
                Demander un devis
              </Button>
              <a
                href={`tel:+${CONTACT_INFO.whatsapp}`}
                className="btn btn-outline-light btn-lg rounded-pill px-5"
              >
                <i className="bi bi-telephone me-2" />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
