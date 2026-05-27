import { Link } from 'react-router-dom';
import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';

export function PageHeader({ title, subtitle, badge, breadcrumbLabel }) {
  return (
    <section className="page-header text-white">
      <Container className="py-5">
        <Breadcrumb className="page-header__breadcrumb mb-4 small">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            Accueil
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{breadcrumbLabel || title}</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="justify-content-center">
          <Col lg={10} xl={8} className="text-center">
            {badge && (
              <span className="badge rounded-pill text-bg-primary mb-3 px-3 py-2" data-aos="fade-up">
                {badge}
              </span>
            )}
            <h1 className="display-5 fw-bold mb-3" data-aos="fade-up">
              {title}
            </h1>
            {subtitle && (
              <p className="lead text-white-50 mb-0 mx-auto" data-aos="fade-up" data-aos-delay="80">
                {subtitle}
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
