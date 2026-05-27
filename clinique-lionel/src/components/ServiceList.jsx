import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

export function ServiceList({ services, showLink = true, linkTo = '/services' }) {
  return (
    <div className="d-flex flex-column gap-3">
      {services.map((service, index) => (
        <Card
          key={service.title}
          className="border-0 shadow-sm service-list-card overflow-hidden"
          data-aos="fade-up"
          data-aos-delay={index * 50}
        >
          <Row className="g-0 flex-column flex-md-row">
            <Col md={4} lg={3}>
              <Card.Img
                src={service.image}
                alt={service.title}
                className="service-list-card__img h-100"
              />
            </Col>
            <Col md={8} lg={9}>
              <Card.Body className="p-4 d-flex flex-column h-100">
                <span className="badge text-bg-primary-subtle text-primary-emphasis align-self-start mb-2">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Card.Title as="h3" className="h4 fw-bold mb-2">
                  {service.title}
                </Card.Title>
                <Card.Text className="text-secondary flex-grow-1 mb-3">
                  {service.description}
                </Card.Text>
                {showLink && (
                  <Link
                    to={linkTo}
                    className="fw-semibold text-primary d-inline-flex align-items-center gap-1"
                  >
                    En savoir plus
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                )}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
}
