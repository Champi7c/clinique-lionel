import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useApi } from '../hooks/useApi';
import { fetchStats } from '../lib/api';
import { STATS as FALLBACK_STATS } from '../data/constants';

function useAnimatedValue(target, active, duration = 2200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    let frameId;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, target, duration]);

  return value;
}

function StatItem({ stat, active }) {
  const value = useAnimatedValue(stat.end_value ?? stat.end, active);
  return (
    <Col xs={6} lg={3}>
      <Card className="border-0 bg-transparent text-center text-white h-100 stat-card" data-aos="zoom-in">
        <Card.Body className="py-3">
          <div className="stat-card__icon rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center">
            <i className={`bi ${stat.icon} fs-5`} aria-hidden="true" />
          </div>
          <p className="display-6 fw-bold mb-1">
            {value}
            <span className="text-primary fs-4">{stat.suffix}</span>
          </p>
          <p className="mb-0 text-white-50 fw-medium">{stat.label}</p>
        </Card.Body>
      </Card>
    </Col>
  );
}

export function StatsCounter() {
  const sectionRef = useRef(null);
  const [inView, setInView]   = useState(false);
  const { data: stats } = useApi(fetchStats, FALLBACK_STATS);

  const list = stats?.length ? stats : FALLBACK_STATS;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-band py-4 py-lg-5" aria-label="Chiffres clés">
      <Container>
        <Row className="g-3 g-lg-0 align-items-center">
          {list.map((stat, i) => (
            <StatItem key={stat.id ?? stat.label ?? i} stat={stat} active={inView} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
