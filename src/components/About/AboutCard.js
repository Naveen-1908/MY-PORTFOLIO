import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naveen Prasath </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />
            I’m a final-year student pursuing B.E. in Computer Science and Engineering at AVS Engineering College.
            <br />
            I enjoy exploring new technologies, building projects, and continuously improving my skills in software development.
            <br />
           In my free time, I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons & Tech Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Articles & Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Naveen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
