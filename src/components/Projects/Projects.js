// src/components/Projects/Projects.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import FakeShutdownImage from "../../Assets/fakeShutdownImage.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* ──────────────────────────────────────────────── */}
          {/* Fake Shutdown Detox card */}
          <Col md={4} className="project-card">
            <ProjectCard
  imgPath={FakeShutdownImage}
  isBlog={false}
  title="📱 Fake Shutdown Detox"
  description="Built a mobile app using Flutter that simulates phone Shutdown to promote digital detox. Integrated Android and iOS APIs to create a realistic 'phone‑off' experience without fully shutting down the device."
  ghLink="https://github.com/Naveen-1908/detox"
  demoLink="https://github.com/Naveen-1908/detox"
/>


          </Col>
          {/* ──────────────────────────────────────────────── */}

          {/* Add more <Col> … </Col> blocks for additional projects */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
