import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pfp2025-clear.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a 
              <i> <b className="purple">{" "} Cybersecurity Engineer {" "} </b></i>
              focused on 
              <i> <b className="purple">{" "} Governance, Risk, and Compliance (GRC), {" "} </b></i>
              with a strong technical foundation across modern cloud platforms and security tooling. 
              <br/><br/>
              My experience spans 
              <i> <b className="purple">{" "} AWS, Google Cloud, and Azure{" "} </b></i>
              environments, containerized architectures using 
              <i> <b className="purple">{" "} Docker and Kubernetes, {" "} </b></i>
              and edge/security platforms like 
              <i> <b className="purple">{" "} Cloudflare. {" "} </b></i>
              I’ve assessed and validated controls using tools such as 
              <i> <b className="purple">{" "} Burp Suite, SonarQube, Splunk, and pfSense, {" "} </b></i>
              enabling risk assessments that go beyond checklist-based compliance.
              <br />
              <br />
              I work closely with engineering and business teams using 
              <i> <b className="purple">{" "} Jira, Confluence, Trello, Slack, and Salesforce. {" "} </b></i>
              to integrate security requirements into SDLC and operational workflows.
              I’m particularly interested in 
              <i> <b className="purple">{" "} HIPAA-aligned {" "} </b></i>
              security programs, 
              <i> <b className="purple">{" "} control mapping, third-party risk management, {" "} </b></i>
              and reducing audit fatigue through 
              <i> <b className="purple">{" "} automation {" "} </b></i>
              and practical security governance.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
