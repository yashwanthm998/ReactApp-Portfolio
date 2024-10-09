import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import web from "../assets/projects/web.jpg";
import ml from "../assets/projects/ml.webp";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="yellow">PROJECTS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="BioCOS Website"
              description="During our internship, we worked on the frontend development of a company’s website using HTML, CSS, and JavaScript. Our goal was to create a responsive, user-friendly, and visually appealing website that accurately reflects the company’s brand and services. We successfully delivered a professional and functional website that meets the company’s needs. Our teamwork and skills in HTML, CSS, and JavaScript resulted in a high-quality product that improves the company’s online presence and user engagement."
              ghLink="https://github.com/yashwanthm998/Frontend-Project.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Text Document Classification Model"
              description="In the fast-paced digital world, efficient management of PDF documents is a cornerstone for businesses and organizations in various industries. Our project introduces a systematic workflow to manage PDF documents effectively, integrating data preprocessing, categorization, priority scheduling, and printing. These strategies are designed to streamline document management, prioritize critical information, and boost productivity. Dive into our workflow and explore the key components that make it work."
              ghLink="https://github.com/Heisenberg208/adobe-devcraft-Code-Crafters"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects