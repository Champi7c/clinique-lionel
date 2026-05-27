import { Col, Row } from 'react-bootstrap';

export function SectionTitle({ eyebrow, title, description, center = true, className = '' }) {
  return (
    <Row className={`mb-5 ${center ? 'justify-content-center text-center' : ''} ${className}`}>
      <Col lg={center ? 8 : 12}>
        {eyebrow && (
          <p className="text-primary fw-semibold text-uppercase small mb-2 letter-spacing-wide">
            {eyebrow}
          </p>
        )}
        <h2 className="display-6 fw-bold mb-3">{title}</h2>
        {description && <p className="text-secondary mb-0 lead-sm">{description}</p>}
      </Col>
    </Row>
  );
}
