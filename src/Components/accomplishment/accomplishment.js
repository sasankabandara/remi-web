import React from "react";
 // Ensure this path is correct
import Acc from "../acc/acc.js";
import { Col, Row } from "react-bootstrap";

const statsData = [
  { label: "STRONG", label2: "COMMUNITY" },
  {  label: "$REMY ", label2: "IS VERIFIED ON BOTH DEDUST.IO AND TONKEEPER" },
  {  label: "LISTED ON ", label2: "MOONTOK" },
  {  label: "UPDATED ", label2: "GECKOTERMINAL" },
  {  label: "EARNED OFFICIAL  ", label2: "BLUE TWITTER/X BADGE" },
];

const accomplishment = () => {
  return (
    <div className="container text-center my-5">
      <header>
        <h1 className="agency-header" style={{ lineHeight: 0.7 , color: "white" } }>
        Accomplishments
          
        </h1>

      </header>

      <section className="stats text-justify my-5">
        <Row>
          {statsData.map((stat, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-3">
              <Acc
                key={index}
                text1={stat.label}
                text2={stat.label2}
                isLast={index === statsData.length - 1}
              />
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default accomplishment;
