import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LOGO_URL } from '../data/constants';

const navItems = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/services', label: 'Nos services' },
  { to: '/sante-travail', label: 'Santé du travail' },
  { to: '/activites', label: 'Activités' },
  { to: '/contact', label: 'Contact' },
];

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      bg="white"
      variant="light"
      className={`site-navbar py-3 ${scrolled ? 'scrolled shadow-sm' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="py-0">
          <img src={LOGO_URL} alt="Clinique Lionel" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" className="border-0 shadow-none" />
        <Navbar.Collapse id="main-navbar" className="align-items-lg-center">
          <Nav className="mx-lg-auto gap-lg-1">
            {navItems.map((item) => (
              <Nav.Link
                key={item.to}
                as={NavLink}
                to={item.to}
                end={item.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `fw-semibold px-3 ${isActive ? 'active text-primary' : 'text-dark'}`
                }
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
          <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0 ms-lg-2">
            <Link
              to="/contact"
              className="btn btn-outline-primary rounded-pill px-4"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="btn btn-primary rounded-pill px-4"
              onClick={closeMenu}
            >
              Prendre RV
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
