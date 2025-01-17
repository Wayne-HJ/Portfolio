import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Wayne Jiang </span>
            from <span className="purple"> Liaoning, China, </span>now live in <span className="purple">Sydney</span>
            <br /> I am a Full Stack Engineer with two years of experience in the field.
            {/* <br /> */}
            {/* Additionally, I am currently employed as a software developer at
            Juspay. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(127 126 165)" }}>
            "You can change your life if you want to!"{" "}
          </p>
          <footer className="blockquote-footer">Wayne</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
