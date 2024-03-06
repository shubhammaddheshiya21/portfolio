import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import docimg from "../../Assets/Projects/docimg.png";
import weather from "../../Assets/Projects/weather.png";
import task from "../../Assets/Projects/task.png";
import doc from "../../Assets/Projects/doc.png";
import travel from "../../Assets/Projects/travel.png";
import finance from "../../Assets/Projects/finance.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docimg}
              isBlog={false}
              title="Doctor Appointment System"
              description="Doctor Appointment System is a MERN Stack web application which provides a platform to user to book appointments with the doctor by sitting at their home. The doctor can approve or reject appointments. Users can also apply for doctor which is approved or rejected by the admin."
              ghLink="https://github.com/shubhammaddheshiya21/BookADoc"
              demoLink="https://bookadoc-5z8a.onrender.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="Budget Buddy"
              description="Budget Buddy is a MERN application serves as a digital platform for users to monitor and manage their financial activities, providing tools for budgeting, expense tracking, and income analysis.  "
              ghLink="https://github.com/shubhammaddheshiya21/BudgetBuddy3.0"
              demoLink="https://budgetbuddy5-0.onrender.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Xchange-crypto"
              description="Designed and developed a Front End web Application  which uses ReactJS, Material UI, Axios, Chart.js to keep track of
the Cryptocurrency all over the world."
              ghLink="https://github.com/shubhammaddheshiya21/CryptoApp"
              demoLink="https://sparkly-bavarois-8bbaec.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Web Application"
              description="This is a basic project built using HTML, CSS and vanilla JavaScript and uses weather api to get the details of weather of a place by entering location."
              ghLink="https://github.com/shubhammaddheshiya21/weatherApp"
              demoLink="https://weatherapp0123.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Sorting-Algo"
              description="It is a web applictaion built using HTML ,CSS and javscript which allows the user to watch and do live sorting Algorithm."
              ghLink="https://github.com/shubhammaddheshiya21/SortingAlgo"
              demoLink="https://sortingalgoss.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doc}
              isBlog={false}
              title="Todo"
              description="Todo is a web application built using HTML, CSS and javascript that enables users to create, organize, and prioritize their daily tasks efficiently."
              ghLink="https://github.com/shubhammaddheshiya21/ToDoApp"
              demoLink="https://todoapp2108.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
