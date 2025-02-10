import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import learning from "../../Assets/Projects/e-learning.png"
import weather from "../../Assets/Projects/weather.png";
import amazon from "../../Assets/Projects/amazonclone.png"
import studyNotion from "../../Assets/Projects/StudtNotion.png"

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
              imgPath={studyNotion}
              isBlog={false}
              title="StudyNotion Website"
              description="StudyNotion is a MERN-based ed-tech platform offering interactive learning, course management, secure payments, cloud storage, AI recommendations, and gamification."
              ghLink="https://github.com/laxmany9335/Study-Notion-.git"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Weather App using HTML, CSS, JavaScript, and OpenWeatherMap API. Features city search, location-based weather, detailed stats, responsive design, and error handling."
              ghLink="https://github.com/laxmany9335/Weather-App.git"
              demoLink="https://laxmany9335.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learning}
              isBlog={false}
              title="e-learning App"
              description="The platform features dynamic filtering for quick course discovery, secure user authentication for personalized access, and smooth navigation with React Router for fast transitions."
              ghLink="https://github.com/laxmany9335/website.git"
              demoLink="https://website-git-main-laxman-yadav-s-projects.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon"
              description="Amazon Clone: Developed using HTML and CSS. Features a responsive design, product listings, navigation bar, and a stylish layout."
              ghLink="https://github.com/laxmany9335/Amazon-website-clone.git"
              demoLink="https://website-git-main-laxman-yadav-s-projects.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
