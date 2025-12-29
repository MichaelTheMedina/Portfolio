import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Michael Medina</span>{" "}
            from <span className="purple">California, USA</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">GRC Specialist</span> at{" "}
            <span className="purple">ChromaCare Counseling</span>.
            <br />I hold a Masters Degree in{" "}
            <span className="purple">Cyber Security and Information Systems</span> from{" "}
            <span className="purple">UMGC</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Making Video Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Optimizing my Daily Workflows 🤖
            </li>
          </ul>

          <p style={{ color: "rgb(0 255 0)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Michael Medina</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
