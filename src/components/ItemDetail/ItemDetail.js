import React, { Component } from 'react';
import Slider from "react-slick";


const ItemDetail =() =>  {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (

      <div className="row justify-content-around ">
        <div className="col-md-9 col-xs-12">
            <Slider {...settings} className='slider'>
              <div className='img-card'>
                <img src='img/poto.jpg' />
              </div>
              <div className='img-card'>
                <img src='img/poto1.jpg' />
              </div>
              <div className='img-card'>
                <img src='img/poto.jpg' />
              </div>
              <div className='img-card'>
                <img src='img/poto1.jpg' />
              </div>
              <div className='img-card'>
                <img src='img/poto2.jpg' />
              </div>
              <div className='img-card'>
                <img src='img/poto1.jpg' />
              </div>
            </Slider>
        </div>
        <div className="col-lg-3 align-self-center ">
          <div className="info" >
            <h3>Arjuk</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
          </div>
        </div>
      </div>
    );
  }
export default ItemDetail;
