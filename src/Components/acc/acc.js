import React from "react";
import { Row, Col } from "react-bootstrap";
import "../acc/acc.css"; // Ensure this path is correct and the CSS file is styled accordingly

const Acc = ({ text1, text2, isLast }) => {
  return (
    <Row className="align-items-center info-card">
    <Col xs="auto" className="info-card-count">
    
    </Col>

    <Col className="info-card-text text-start"><Row><Col>{text1}</Col></Row><Row><Col>{text2}</Col></Row></Col>
    
    {!isLast && <Col xs="auto" className="vertical-divider"></Col>}
  </Row>
  );
};

export default Acc;
