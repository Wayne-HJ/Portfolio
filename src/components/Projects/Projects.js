import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Wayne's Website"
              description="This is a personal website with a front-end and back-end separation. The front-end is implemented using Vue, with an overall style inspired by the Hexo blog design. The back-end is implemented using Spring Boot, MySQL, Redis, and RabbitMQ, and includes features such as blogging, leaving messages, commenting, a chat room, a photo album, and a portfolio showcase."
              ghLink="https://github.com/Wayne-HJ/personal-website"
              demoLink="https://blog.jianght.eu.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Web Management Platform"
              description="This is a website management backend with a front-end and back-end separation. The front-end is implemented using Vue and Element-UI, with an overall style based on Element-Admin. The back-end is implemented using Spring Boot, MySQL, and Redis, and includes features such as article management, page management, menu configuration, user management, and access control."
              ghLink="https://github.com/Wayne-HJ/web-management-platform"
              demoLink="https://manage.jianght.eu.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Personal NavPage"
              description="This is a clean and minimalistic navigation homepage built with HTML, JS, and CSS. It offers the ability to switch between search tools, provides intelligent suggestions, and includes quick tags and commonly used website navigation features."
              ghLink="https://github.com/Wayne-HJ/navweb"
              demoLink="https://navweb.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
