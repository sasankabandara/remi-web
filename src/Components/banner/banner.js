import React from "react";
import "../banner/banner.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";

const Banner = () => {
  return (
    <Container>
      <div className="banner">
        <img src="/images/back.jpg" alt="Banner" className="banner-image" />
        <div className="banner-text container">
          <div className="row">
            <div className="col-12">
              <p className="text-small">Telegrams favorite Jack Russell Terrier!!! Now CTO!!!</p>
              <p className="text-large">WELCOME TO<br />$REMY ON<br />$TON</p>
              <p className="description">
                🐕 $REMY is not just a community-owned token it’s a symbol<br /> of strength, unity, and community 💪empowerment.<br /><br />

                💰 With 100% of the liquidity owned by the community, putting true<br /> power and freedom into the hands of the investors!!!<br />
                <br />
                🚇 Join us on our revolutionary journey!!!  $REMY
              </p>
            </div>
          </div>
        </div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-8"></div>
            <div className="col-md-4 text-right remi">
              <img src="/images/balla.png" alt="balla" className="balla-image" />
              <img src="/images/Ellipse.png" alt="Ellipse" className="Ellipse-image" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
