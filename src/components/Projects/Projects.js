import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import nav from "../../Assets/Projects/nav.png";
import manage from "../../Assets/Projects/manage.png";

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
              imgPath={blog}
              isBlog={false}
              title="Personal Website"
              description="With a focus on front-end and back-end separation, using Vue, I've created a visually captivating interface inspired by the sleek design of Hexo blogs. The back-end, powered by Spring Boot, MySQL, Redis, and RabbitMQ, ensures robust data handling and seamless communication.Explore my website's features: engaging blog posts, interactive commenting, real-time chat room, organized photo albums, and a portfolio showcasing my achievements."
              ghLink="https://github.com/Wayne-HJ/personal-website"
              demoLink="https://blog.jianght.eu.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={manage}
              isBlog={false}
              title="Web Admin"
              description="In this project the front-end is developed using Vue and Element-UI, leveraging the aesthetic elements of Element-Admin for an appealing user interface. On the other hand, the back-end is built upon Spring Boot, MySQL, and Redis, offering robust functionality including article and page management, menu configuration, user administration, and advanced access control capabilities.I employed best practices such as modularization, separation of concerns, and reusable components to ensure the project's long-term sustainability."
              ghLink="https://github.com/Wayne-HJ/vue-web-admin"
              demoLink="https://manage.jianght.eu.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nav}
              isBlog={false}
              title="Convenient Navigation Page"
              description="Built with HTML, JS, and CSS. Designed with simplicity and functionality in mind, this project showcases my skills and achievements in web development.The navigation homepage offers a seamless user experience, allowing easy switching between search tools and providing intelligent suggestions. With quick tags and commonly used website navigation features, visitors can effortlessly navigate through the content."
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
