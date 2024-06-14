import React from "react";
import "../banner/banner.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src="/images/back.jpg" alt="Banner" className="banner-image" />
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
  );
};

export default Banner;
