import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageHeader } from '../components/PageHeader';
import { CONTACT_INFO } from '../data/constants';
import { SEO } from '../components/SEO';

const domains = [
  {
    id: 'medical',
    number: '01',
    icon: 'bi-hospital',
    title: 'Activités Médicales',
    subtitle: 'Suivi santé & prévention',
    groups: [
      {
        title: 'Visites Médicales',
        items: ["Visites d'embauche", 'Visites périodiques', 'Visites de reprise', 'Visites de préreprise'],
      },
      {
        title: 'Examens & Surveillance',
        items: ["Examens d'aptitude", 'Suivi des travailleurs à risques', 'Surveillance biologique', 'Analyses et explorations'],
      },
      {
        title: 'Monitoring & Prévention',
        items: ["Métrologie d'ambiance", 'Biométrologie', 'Campagnes de dépistage', 'Programmes de vaccination'],
      },
    ],
  },
  {
    id: 'audit',
    number: '02',
    icon: 'bi-graph-up',
    title: 'Audit & Conseil',
    subtitle: 'Évaluation & conformité',
    groups: [
      {
        title: 'Évaluation des Risques',
        items: ['EVRP et DUER', 'Évaluation ergonomique', 'Risques chimiques et biologiques', 'Risques psychosociaux (RPS)'],
      },
      {
        title: 'Audit & Conformité',
        items: ['Audit de conformité SST', 'Accompagnement ISO 45001', "Étude d'accidents et incidents", 'Analyse des causes'],
      },
    ],
  },
  {
    id: 'formation',
    number: '03',
    icon: 'bi-book',
    title: 'Formation',
    subtitle: 'Sensibilisation & compétences',
    groups: [
      {
        title: 'Formations Obligatoires',
        items: ['Sauveteurs Secouristes du Travail (SST)', 'Formation CHS', 'Sécurité incendie et évacuation', 'Risques chimiques'],
      },
      {
        title: 'Sensibilisations Thématiques',
        items: ['Troubles musculosquelettiques (TMS)', 'Gestion du stress', 'Prévention des addictions', 'Ergonomie au travail'],
      },
    ],
  },
  {
    id: 'management',
    number: '04',
    icon: 'bi-diagram-3',
    title: 'Management SST',
    subtitle: 'Gestion & pilotage',
    groups: [
      {
        title: 'Mise en place',
        items: [
          "Élaboration de politiques SST et plans d'action",
          'Mise en place de systèmes de management SST (ISO 45001)',
          'Création de tableaux de bord et indicateurs SST',
          "Élaboration de procédures internes et plans d'urgence",
        ],
      },
    ],
  },
  {
    id: 'expertise',
    number: '05',
    icon: 'bi-tools',
    title: 'Expertise Technique',
    subtitle: 'Appui & accompagnement',
    groups: [
      {
        title: 'Appui technique',
        items: [
          "Participation aux comités : CHS, CSE, Restaurant",
          "Études d'impact sanitaire",
          'Fourniture et suivi des EPI',
          'Recommandations techniques',
          "Rédaction de rapports d'expertise",
        ],
      },
    ],
  },
  {
    id: 'secteurs',
    number: '06',
    icon: 'bi-building',
    title: 'Interventions Sectorielles',
    subtitle: "Tous secteurs d'activité",
    sectors: [
      { icon: 'bi-water', name: 'Maritime / Portuaire', desc: "Sécurité à bord, suivi d'équipages" },
      { icon: 'bi-cone-striped', name: 'BTP', desc: 'Plan de prévention, sécurité chantiers, EPI' },
      { icon: 'bi-lightning-charge', name: 'Énergie / Mines', desc: 'Risques chimiques et rayonnements' },
      { icon: 'bi-truck', name: 'Transport / Logistique', desc: 'Ergonomie, fatigue, manutention, risque routier' },
      { icon: 'bi-droplet', name: 'Agroalimentaire / Chimie', desc: 'Biosécurité et hygiène industrielle' },
      { icon: 'bi-grid', name: 'Autres secteurs', desc: 'Solutions sur mesure selon vos besoins' },
    ],
  },
  {
    id: 'digital',
    number: '07',
    icon: 'bi-laptop',
    title: 'Outils Numériques',
    subtitle: 'PréventioLog',
    groups: [
      {
        title: 'Digitalisation',
        items: ['Suivi médical numérique', 'DUER digitalisé', 'Tableaux de bord SST'],
      },
      {
        title: 'Applications & Plateforme',
        items: ['Suivi des EPI et incidents', 'Reporting automatisé', 'Plateforme e-learning SST'],
      },
    ],
  },
];

export function Activites() {
  const [active, setActive] = useState('medical');
  const current = domains.find((d) => d.id === active);

  return (
    <div className="inner-page">
      <SEO
        path="/activites"
        title="Nos Activités SST – Visites Médicales, Audit, Formation, Management"
        description="Cabinet LIONEL SST à Dakar : activités médicales (visites d'embauche, surveillance biologique), audit SST, formations sécurité, management SST ISO 45001, expertise technique et outils numériques pour entreprises au Sénégal."
      />
      <PageHeader
        title="Nos Activités"
        subtitle="Cabinet LIONEL SST — solutions complètes et personnalisées pour la santé et la sécurité de vos équipes."
        breadcrumbLabel="Activités"
      />

      <section className="py-5">
        <Container>
          {/* Tabs navigation */}
          <div className="activity-tabs mb-5" data-aos="fade-up">
            {domains.map((d) => (
              <button
                key={d.id}
                type="button"
                className={`activity-tab-btn ${active === d.id ? 'is-active' : ''}`}
                onClick={() => setActive(d.id)}
              >
                <span className="activity-tab-btn__num">{d.number}</span>
                <span className="activity-tab-btn__label d-none d-md-inline">{d.title}</span>
                <i className={`bi ${d.icon} d-md-none`} aria-hidden="true" />
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div data-aos="fade-up" data-aos-delay="60" key={current.id}>
            <Row className="align-items-start g-5">
              {/* En-tête du domaine */}
              <Col lg={4}>
                <div className="activity-domain-header p-4 rounded-4">
                  <div className="activity-domain-header__icon rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                    <i className={`bi ${current.icon} fs-2`} aria-hidden="true" />
                  </div>
                  <div className="activity-domain-header__num mb-1">{current.number}</div>
                  <h2 className="h3 fw-bold text-white mb-2">{current.title}</h2>
                  <p className="text-white-50 mb-0">{current.subtitle}</p>
                </div>
              </Col>

              {/* Contenu */}
              <Col lg={8}>
                {current.sectors ? (
                  <Row className="g-3">
                    {current.sectors.map((sector) => (
                      <Col sm={6} key={sector.name}>
                        <div className="activity-sector-card rounded-4 p-4 h-100">
                          <i className={`bi ${sector.icon} text-primary fs-4 mb-2 d-block`} />
                          <div className="fw-bold mb-1">{sector.name}</div>
                          <p className="text-secondary small mb-0">{sector.desc}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <Row className="g-4">
                    {current.groups.map((group) => (
                      <Col md={current.groups.length === 1 ? 12 : 6} key={group.title}>
                        <div className="activity-group rounded-4 p-4 h-100">
                          <h3 className="h6 fw-bold text-primary text-uppercase letter-spacing-wide mb-3">
                            {group.title}
                          </h3>
                          <ul className="list-unstyled mb-0">
                            {group.items.map((item) => (
                              <li key={item} className="d-flex align-items-start gap-2 mb-2 text-secondary small">
                                <i className="bi bi-check2-circle text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    ))}
                  </Row>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 bg-light">
        <Container data-aos="fade-up">
          <div className="home-cta-card rounded-4 p-5 text-center">
            <h2 className="display-6 fw-bold text-white mb-3">
              Prêt à améliorer votre SST ?
            </h2>
            <p className="text-white-50 lead-sm mb-4 mx-auto" style={{ maxWidth: '500px' }}>
              Contactez-nous pour une consultation personnalisée et un devis adapté à votre
              entreprise.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button as={Link} to="/contact" variant="primary" size="lg" className="rounded-pill px-5 fw-semibold">
                Nous contacter
              </Button>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
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
    </div>
  );
}
