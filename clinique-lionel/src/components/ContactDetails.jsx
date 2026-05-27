import { Card, ListGroup } from 'react-bootstrap';
import { CONTACT_INFO } from '../data/constants';

export function ContactDetails({ className = '' }) {
  const items = [
    {
      icon: 'bi-geo-alt-fill',
      label: 'Adresse',
      value: CONTACT_INFO.address,
      href: `https://maps.google.com/maps?q=Hann+Mariste+2,+Keur+Ngor,+Dakar,+Senegal`,
    },
    {
      icon: 'bi-clock-fill',
      label: 'Horaires',
      value: CONTACT_INFO.hours,
      href: null,
    },
    {
      icon: 'bi-telephone-fill',
      label: 'Téléphone',
      value: CONTACT_INFO.phone,
      href: `tel:+${CONTACT_INFO.whatsapp}`,
    },
    {
      icon: 'bi-whatsapp',
      label: 'WhatsApp',
      value: `+221 ${CONTACT_INFO.phone}`,
      href: `https://wa.me/${CONTACT_INFO.whatsapp}`,
      external: true,
    },
    {
      icon: 'bi-envelope-fill',
      label: 'E-mail',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
  ];

  return (
    <Card className={`border-0 shadow-sm h-100 ${className}`}>
      <Card.Body className="p-4">
        <Card.Title as="h2" className="h5 fw-bold mb-4">
          Nos coordonnées
        </Card.Title>
        <ListGroup variant="flush" className="contact-details-list">
          {items.map((item) => (
            <ListGroup.Item key={item.label} className="px-0 border-0 pb-3">
              <div className="d-flex gap-3">
                <span className="contact-details-list__icon rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                  <i className={`bi ${item.icon}`} aria-hidden="true" />
                </span>
                <div>
                  <div className="small text-secondary text-uppercase fw-semibold mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="fw-semibold text-body"
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="fw-semibold">{item.value}</span>
                  )}
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
