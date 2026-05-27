import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useApi } from '../hooks/useApi';
import { fetchHeroSlides } from '../lib/api';
import { useSiteSettings } from '../context/SiteContext';
import { HERO_SLIDES as FALLBACK_SLIDES, CONTACT_INFO } from '../data/constants';

export function HeroSection() {
  const { data: slides } = useApi(fetchHeroSlides, FALLBACK_SLIDES);
  const { settings }     = useSiteSettings();
  const [active, setActive] = useState(0);

  const list = slides?.length
    ? slides.map(s => ({ image: s.image_url || s.image, title: s.title, subtitle: s.subtitle, cta: s.cta_label || s.cta }))
    : FALLBACK_SLIDES;

  useEffect(() => {
    if (list.length <= 1) return;
    const timer = setInterval(() => setActive(p => (p + 1) % list.length), 7000);
    return () => clearInterval(timer);
  }, [list.length]);

  const slide  = list[active] || list[0];
  const phone  = settings?.phone  || CONTACT_INFO.phone;
  const wa     = settings?.whatsapp || CONTACT_INFO.whatsapp;
  const hours  = settings?.hours  || CONTACT_INFO.hours;

  return (
    <section className="hero-fullbg">
      {list.map((item, index) => (
        <div
          key={index}
          className={`hero-fullbg__bg ${index === active ? 'is-visible' : ''}`}
          style={{ backgroundImage: `url(${item.image})` }}
          aria-hidden="true"
        />
      ))}
      <div className="hero-fullbg__overlay" aria-hidden="true" />

      <div className="hero-fullbg__body">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8} xl={7}>
              <span className="badge rounded-pill text-bg-primary mb-4 px-3 py-2" data-aos="fade-down">
                Cabinet Médical Lionel — Hann Mariste 2, Dakar
              </span>
              <h1 className="display-4 fw-bold text-white mb-4 lh-sm" data-aos="fade-up" data-aos-delay="60">
                {slide?.title}
              </h1>
              <p className="lead text-white-50 mb-5" data-aos="fade-up" data-aos-delay="120">
                {slide?.subtitle}
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap" data-aos="fade-up" data-aos-delay="180">
                <Button as={Link} to="/contact" variant="primary" size="lg" className="rounded-pill px-5 fw-semibold">
                  {slide?.cta || 'Nous contacter'}
                </Button>
                <Button as={Link} to="/services" variant="outline-light" size="lg" className="rounded-pill px-5">
                  Nos services
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="hero-fullbg__dots" role="tablist" aria-label="Slides">
        {list.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Slide ${index + 1}`}
            className={`hero-fullbg__dot ${index === active ? 'is-active' : ''}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>

      <div className="hero-fullbg__infobar">
        <Container>
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center gap-3 gap-lg-0">
            <div className="hero-infobar__item">
              <i className="bi bi-geo-alt-fill text-primary me-2" />
              <span className="text-white-50 small">Hann Mariste 2, Keur Ngor, Dakar</span>
            </div>
            <div className="hero-infobar__divider d-none d-lg-block" />
            <div className="hero-infobar__item">
              <i className="bi bi-clock-fill text-primary me-2" />
              <span className="text-white-50 small">{hours}</span>
            </div>
            <div className="hero-infobar__divider d-none d-lg-block" />
            <a href={`tel:+${wa}`} className="hero-infobar__item hero-infobar__item--link">
              <i className="bi bi-telephone-fill text-primary me-2" />
              <span className="text-white small fw-semibold">{phone}</span>
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
