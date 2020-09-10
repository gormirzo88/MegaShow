import React, { Component } from 'react';
import Slider from "react-slick";


const AboutUs = () => {

  const conect = () => {
    alert('aaa')
  };
  return (
    <div className="row justify-content-around about">
      <div className="col-md-7  col-xs-9 align-self-center about-info">
        <h3>Mer masin</h3>
        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
      </div>
      <div className="col-lg-3 align-self-center  conect">
        <button type="button" className="btn" onClick={conect}>Kapnvel</button>
      </div>
    </div>
  );

}
export default AboutUs;
