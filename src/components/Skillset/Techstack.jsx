import { Row, Col } from "react-bootstrap";
import { DiJavascript1, DiNodejs, DiReact, DiGit, DiJava, DiPython, DiCss3 } from "react-icons/di";
import { SiHtml5, SiDjango, SiAngularjs, SiOpencv, SiC, SiMaterialui, SiMysql } from "react-icons/si";
import './Techstack.css'; // Assuming you're using a CSS file for styling

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava className="tech-icon" title="Java" />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython className="tech-icon" title="Python" />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC className="tech-icon" title="C Programming" />
        <p>C Programming</p>
      </Col>

      {/* Web Development */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 className="tech-icon" title="HTML" />
        <p>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 className="tech-icon" title="CSS" />
        <p>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="tech-icon" title="JavaScript" />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango className="tech-icon" title="Django" />
        <p>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs className="tech-icon" title="AngularJS" />
        <p>AngularJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="tech-icon" title="React" />
        <p>React</p>
      </Col>

      {/* Image Processing */}
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv className="tech-icon" title="OpenCV" />
        <p>OpenCV</p>
      </Col>

      {/* Database */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql className="tech-icon" title="MySQL" />
        <p>MySQL</p>
      </Col>
    </Row>
  );
};

export default Techstack;
