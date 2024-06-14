import React from "react";
import "../banner/banner.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";

const Banner = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-6">
          <br/><br/>
          <p className="text-small top-text">Telegrams favorite Jack Russell Terrier!!! Now CTO!!!</p>
          <p className="text-large">WELCOME TO <br /><span className="text-blue">$REMY</span> ON<br />$TON</p>
          <br/><br/>
          <p className="description">
            🐕 $REMY is not just a community-owned token it’s a symbol<br /> of strength, unity, and community 💪empowerment.<br /><br />

            💰 With 100% of the liquidity owned by the community, putting true<br /> power and freedom into the hands of the investors!!!<br />
            <br />
            🚇 Join us on our revolutionary journey!!!  $REMY
          </p>
          <br/><br/><br/>
          <p>NOTHING WILL STOP US.</p>
          <button>Join Us Now </button>
        </div>
        <div className="col-6">
          <p className="top-text-right">Did you Know that telegram needed a Dog???...<br/><span className="start-left">And that Dog is $REMY</span></p>
          <img src="/images/combined.png" alt="balla" className="dog-image" />
        </div>
      </div>
      <div className="banner-text">
        <div className="row">
          <div className="col-12">

          </div>
        </div>
      </div>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-8"></div>
          <div className="col-md-4 text-right remi">

          </div>
        </div>
      </div>
      <div className="detail-container">
      <div className="detail-item">LP BURNED</div>
      <div className="detail-item">MINT REVOKED</div>
      <div className="detail-item">TAX 0/0%</div>
      <div className="detail-item contract">Contract: EQBwJaB-51Efd1CraJskTAkx2NDZHf71ONWUlJI-KIGOzs4b</div>
    </div>
    </Container>
  );
};

export default Banner;
