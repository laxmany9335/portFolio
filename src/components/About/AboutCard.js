import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="purple">Laxman Yadav </span>
            from <span className="purple"> Ambedkar(U.P), India.</span>
            <br />I am pursuing BTech in Electronics Engineering from Dr. Ambedkar Institute of Technology for Handicapped kanpur. I have done a 1 month internship at <span className="purple">EMSEC</span> as an Electronics
            Engineer.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Engineer Without Transferable Attitude Can't Transform The World!"{" "}
          </p>
          <footer className="blockquote-footer">Laxman Yadav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
