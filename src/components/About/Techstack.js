import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiPython,
  DiGit,
  DiDocker,
  DiJava,
  DiNginx
} from "react-icons/di";
import {
  SiRedis,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNginx/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col> */}
     
    </Row>
  );
}

export default Techstack;
