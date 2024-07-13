import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.png";
import projImg2 from "../assets/img/img5.png";
import projImg3 from "../assets/img/img4.png";
import projImg4 from "../assets/img/img6.png";
import projImg5 from "../assets/img/img2.png";
import projImg6 from "../assets/img/img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Travel Tracker",
      description:
        "Created a web application that lets you to store the information about the countries you visited highlighted on the map for multiple family members.",
      imgUrl: projImg2,
      url: "https://github.com/cpd007/travel_tracker",
    },
    {
      title: "Password Manager",
      description:
        "This app allows to store passwords for different websites on your local computer and it also has an auto password generator that helps you to come up with a strong password",
      imgUrl: projImg3,
      url: "https://github.com/cpd007/pwd_manager",
    },
    {
      title: "Titanic Survivor Prediction Model",
      description:
        "A model that predicts which passengers survived the Titanic shipwreck.",
      imgUrl: projImg1,
      url: "https://github.com/cpd007/Titanic-Survival-Prediction-Kaggle-",
    },
  ];
  const projects2 = [
    {
      title: "To-Do List",
      description:
        "I have created a To Do list web application which allows users to create and view tasks. ",
      imgUrl: projImg4,
      url: "https://github.com/cpd007/toDoList",
    },
    {
      title: "Movie Rating Predictor",
      description:
        "A movie rating predictor model that uses Random Forest Regressor and GridSerachCV ",
      imgUrl: projImg5,
      url: "https://github.com/cpd007/movie_rating_predictor",
    },
    {
      title: "YouTube Mock Site",
      description: "A mock of YouTube made using HTML and CSS",
      imgUrl: projImg6,
      url: "https://cpd007.github.io/youtube_mock/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>These are my projects.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
