import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiCss3  // Исправленный импорт
} from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";  // Иконка HTML5

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />  {/* Иконка для CSS3 */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />  {/* Иконка для HTML */}
      </Col>
    </Row>
  );
}

export default Techstack;