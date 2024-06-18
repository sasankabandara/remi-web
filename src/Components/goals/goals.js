// Goals.js
import React from 'react';
import '../goals/goals.css';
import { Col, Row } from "react-bootstrap";

const Goals = () => {
  return (
    <div className="container" >
      <div className="goals-card">
        <Row>
          <Col>
            <span className="goals-title">GOALS</span>
          </Col>
          <Col>
          <p className="goals-text">To Make $REMY One Of The Successful<br/>Projects On The Ton Network</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Goals;
