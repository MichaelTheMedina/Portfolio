import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CCC from "../../Assets/Projects/CCC.webp";
import ABF from "../../Assets/Projects/ABF.webp";
import BF from "../../Assets/Projects/BF.jpg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CCC}
              isBlog={false}
              title="ChromaCare Counseling"
              description="I do Governance Risk and Compliance (GRC) for a Small Counseling Clinic specializing in Trauma Treatment."
              demoLink="https://www.chromacarecounseling.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ABF}
              isBlog={false}
              title="Abiotic Factor"
              description="I was a Producer for a Critically Acclaimed Video game Abiotic Factor, a narrative driven survival crafting experience for 1-6 players set in the depths of an underground research facility."
              demoLink="https://www.abioticfactor.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BF}
              isBlog={false}
              title="BishopFox"
              description="I was a Cyber Security Analyst for BishopFox's Continuous Threat Exposure Management Platform."
              demoLink="https://bishopfox.com/services/cosmos"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
