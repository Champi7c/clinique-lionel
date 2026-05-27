import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

export function CtaSection({
  title,
  description,
  buttonLabel = 'Nous contacter',
  buttonTo = '/contact',
}) {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Card
          className="border-0 shadow-lg text-center p-4 p-md-5 cta-section-card"
          data-aos="fade-up"
        >
          <Card.Body>
            <h2 className="display-6 fw-bold mb-3">{title}</h2>
            <p className="text-secondary mb-4 mx-auto cta-section-card__text">{description}</p>
            <Button as={Link} to={buttonTo} variant="primary" size="lg" className="rounded-pill px-4">
              {buttonLabel}
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
