import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { CONTACT_INFO, FOOTER_TAGLINE, LOGO_URL } from '../data/constants';
import { useSiteSettings } from '../context/SiteContext';

const footerLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/sante-travail', label: 'Santé du travail' },
  { to: '/activites', label: 'Activités' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  const { settings } = useSiteSettings();
  const address  = settings?.address       || CONTACT_INFO.address;
  const email    = settings?.email         || CONTACT_INFO.email;
  const phone    = settings?.phone         || CONTACT_INFO.phone;
  const whatsapp = settings?.whatsapp      || CONTACT_INFO.whatsapp;
  const hours    = settings?.hours         || CONTACT_INFO.hours;
  const tagline  = settings?.footer_tagline || FOOTER_TAGLINE;

  return (
    <footer className="site-footer pt-5 pb-0">
      <Container>
        <Row className="g-4 pb-5">
          {/* Logo + tagline */}
          <Col lg={4} md={6}>
            <Link to="/">
              <img src={LOGO_URL} alt="Cabinet Médical Lionel" className="footer-logo mb-3" />
            </Link>
            <p className="text-white-50 small lh-lg mb-3">{tagline}</p>
            <div className="d-flex align-items-center gap-2 footer-hours-badge">
              <i className="bi bi-clock text-primary" aria-hidden="true" />
              <span className="small text-white-50">{hours}</span>
            </div>
          </Col>

          {/* Navigation */}
          <Col lg={3} md={6}>
            <h5 className="text-white fw-bold mb-3">Navigation</h5>
            <ListGroup variant="flush" className="footer-links">
              {footerLinks.map((link) => (
                <ListGroup.Item key={link.to} className="bg-transparent border-0 px-0 py-1">
                  <Link to={link.to} className="footer-link d-flex align-items-center gap-2">
                    <i className="bi bi-chevron-right small text-primary" aria-hidden="true" />
                    {link.label}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Contacts */}
          <Col lg={5} md={12}>
            <h5 className="text-white fw-bold mb-3">Contactez-nous</h5>
            <ListGroup variant="flush" className="footer-contact text-white-50 small">
              <ListGroup.Item className="bg-transparent border-0 px-0 py-2">
                <div className="d-flex gap-2 align-items-start">
                  <i className="bi bi-geo-alt-fill text-primary mt-1" aria-hidden="true" />
                  <span className="text-white-50">{address}</span>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 px-0 py-2">
                <div className="d-flex gap-2 align-items-center">
                  <i className="bi bi-telephone-fill text-primary" aria-hidden="true" />
                  <a href={`tel:+${whatsapp}`} className="text-white-50">{phone}</a>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 px-0 py-2">
                <div className="d-flex gap-2 align-items-center">
                  <i className="bi bi-envelope-fill text-primary" aria-hidden="true" />
                  <a href={`mailto:${email}`} className="text-white-50">{email}</a>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0 px-0 pt-2 pb-0">
                <a
                  href={`https://wa.me/${whatsapp}`}
                  className="btn btn-sm footer-whatsapp-btn rounded-pill d-inline-flex align-items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp" />
                  Écrire sur WhatsApp
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* Barre bas */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center py-4 gap-3">
          <p className="small text-white-50 mb-0">
            © {new Date().getFullYear()} Cabinet Médical Lionel. Tous droits réservés.
          </p>
          <div className="d-flex gap-2">
            <a
              href={`https://wa.me/${whatsapp}`}
              className="btn btn-outline-light btn-sm rounded-circle social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp" />
            </a>
            <a
              href="https://facebook.com"
              className="btn btn-outline-light btn-sm rounded-circle social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
