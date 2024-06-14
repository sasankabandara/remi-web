import React from "react";
// Ensure this path is correct
import "../accomplishment/accomplishment.css"
import { Col, Row } from "react-bootstrap";

const statsData = [
  { label: "STRONG", label2: "COMMUNITY" },
  { label: "$REMY ", label2: "IS VERIFIED ON BOTH DEDUST.IO AND TONKEEPER" },
  { label: "LISTED ON ", label2: "MOONTOK" },
  { label: "UPDATED ", label2: "GECKOTERMINAL" },
  { label: "EARNED OFFICIAL  ", label2: "BLUE TWITTER/X BADGE" },
];

const accomplishment = () => {
  return (
    <div className="accomplishment-div">
    <br /><br />
    <br />
      <div className="container text-center">
        <header>
          <h1 className="agency-header" style={{ lineHeight: 0.7, color: "white" }}>
            Accomplishments
          </h1>
        </header>
        <br/>

        <section className="stats text-justify my-5">
          <Row>
            <Col xs="auto" >
              <p>STRONG <span className="text-blue">COMMUNITY</span></p>
            </Col>
            <Col xs="auto" className="vertical-divider" />
            <Col xs="auto" >
              <p><span className="text-blue">$REMY </span>IS VERIFIED ON BOTH<br />DEDUST.IO AND TONKEEPER</p>
            </Col>
            <Col xs="auto" className="vertical-divider" />
            <Col xs="auto" >
              <p>LISTED ON <span className="text-blue">MOONTOK</span></p>
            </Col>
            <Col xs="auto" className="vertical-divider" />
            <Col xs="auto" >
              <p>UPDATED <span className="text-blue">GECKOTERMINAL</span></p>
            </Col>
            <Col xs="auto" className="vertical-divider" />
            <Col xs="auto" >
              <p><span className="text-blue">EARNED OFFICIAL </span>BLUE <br />TWITTER/X BADGE</p>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
};

export default accomplishment;
