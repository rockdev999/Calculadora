import { Container, Navbar, Nav, Row, Col, Button, Form } from 'react-bootstrap'

function SectionTitle({ overline, title }) {
  return (
    <div className="text-center mb-4">
      {overline && (
        <div className="text-uppercase small tracking-wide muted">{overline}</div>
      )}
      <h2 className="display-6 fw-bold">{title}</h2>
      <div className="divider"></div>
    </div>
  )
}

function Hero() {
  return (
    <header id="about" className="hero section-dark text-light">
      <Container className="hero-content py-5">
        <Row className="align-items-center">
          <Col md={8} lg={7} className="py-5">
            <h1 className="display-4 fw-bold mb-3">We integrate Earth & Space data</h1>
            <p className="lead muted mb-4">
              For governments, business, industry and research. High‑end software engineering and
              remote sensing from space.
            </p>
            <Button className="btn-lime me-3">Get started</Button>
            <Button variant="outline-light">Learn more</Button>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

function Capabilities() {
  const items = [
    { icon: 'bi-cpu', title: 'AI & Data Science', text: 'Analytics and intelligence' },
    { icon: 'bi-cloud', title: 'Cloud Computing', text: 'Scalable processing' },
    { icon: 'bi-graph-up', title: 'Predictive Modelling', text: 'Mathematical models' },
    { icon: 'bi-diagram-3', title: 'Systems Architecture', text: 'Robust platforms' },
  ]
  return (
    <section id="capabilities" className="py-5 section-darker">
      <Container>
        <SectionTitle overline="Our capabilities" title="High‑end software engineering" />
        <Row className="g-4">
          {items.map((it) => (
            <Col key={it.title} md={6} lg={3}>
              <div className="text-center glass-card h-100">
                <div className="icon-circle mb-3"><i className={`bi ${it.icon}`}/></div>
                <h5 className="fw-bold mb-1">{it.title}</h5>
                <div className="small muted">{it.text}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

function SatelliteSection() {
  return (
    <section className="py-5 section-dark">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <img className="img-fluid rounded-3" src="https://images.unsplash.com/photo-1581092921461-eab62e97a499?auto=format&fit=crop&w=1200&q=60" alt="satellite" />
          </Col>
          <Col lg={6}>
            <SectionTitle overline="Remote sensing from space" title="Every day satellites" />
            <p className="muted">
              Everyday satellites monitor our planet, detect disasters and deliver valuable datasets to Earth.
              We build solutions that transform these datasets into insight.
            </p>
            <Button className="btn-lime">Learn more</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

function SystemsSection() {
  return (
    <section className="py-5 section-darker">
      <Container>
        <Row className="align-items-center g-4 flex-lg-row-reverse">
          <Col lg={6}>
            <img className="img-fluid rounded-3" src="https://images.unsplash.com/photo-1581090588406-7b5baab2a19c?auto=format&fit=crop&w=1200&q=60" alt="systems" />
          </Col>
          <Col lg={6}>
            <SectionTitle overline="We work with several" title="High tech systems" />
            <p className="muted">
              We design robust architectures, pipelines and APIs for satellite data ingestion, analysis and visualization.
            </p>
            <Button className="btn-lime">Learn more</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <SectionTitle overline="Contáctanos" title="Get in touch" />
        <Row className="justify-content-center">
          <Col lg={8}>
            <Form className="contact-form">
              <Row className="g-3">
                <Col md={6}><Form.Control placeholder="First name" /></Col>
                <Col md={6}><Form.Control placeholder="Last name" /></Col>
                <Col md={6}><Form.Control type="email" placeholder="Email" /></Col>
                <Col md={6}><Form.Control placeholder="Subject" /></Col>
                <Col xs={12}><Form.Control as="textarea" rows={4} placeholder="Message" /></Col>
              </Row>
              <div className="text-center mt-4">
                <Button className="btn-lime px-5" type="submit">Submit</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

function SiteNavbar() {
  return (
    <Navbar expand="lg" bg="transparent" variant="dark" className="position-absolute w-100">
      <Container>
        <Navbar.Brand className="fw-bold">GEOKAPTI</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#capabilities">Capabilities</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

function Footer() {
  return (
    <footer className="py-5 section-dark">
      <Container className="text-center">
        <div className="mb-3 fw-bold">GEOKAPTI</div>
        <div className="small muted">© {new Date().getFullYear()} All rights reserved.</div>
      </Container>
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <Hero />
      <SiteNavbar />
      <Capabilities />
      <SatelliteSection />
      <SystemsSection />
      <Contact />
      <Footer />
    </div>
  )
}
