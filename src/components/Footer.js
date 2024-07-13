import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/icons8-email-50(1).png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/shivang-shukla-8a5195235">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/cpd007">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="shivangshuklacpd1028@gmail.com">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
