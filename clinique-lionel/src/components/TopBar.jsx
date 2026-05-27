import { Container } from 'react-bootstrap';
import { useSiteSettings } from '../context/SiteContext';
import { CONTACT_INFO } from '../data/constants';

export function TopBar() {
  const { settings } = useSiteSettings();
  const address = settings?.address || CONTACT_INFO.address;
  const email   = settings?.email   || CONTACT_INFO.email;
  const phone   = settings?.phone   || CONTACT_INFO.phone;

  return (
    <div className="top-bar d-none d-lg-block">
      <Container className="d-flex justify-content-between align-items-center py-2 small">
        <span>
          <i className="bi bi-geo-alt-fill me-2" aria-hidden="true" />
          {address}
        </span>
        <span>
          <i className="bi bi-envelope-fill me-2" aria-hidden="true" />
          <a href={`mailto:${email}`}>{email}</a>
        </span>
        <span>
          <i className="bi bi-telephone-fill me-2" aria-hidden="true" />
          <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
        </span>
      </Container>
    </div>
  );
}
