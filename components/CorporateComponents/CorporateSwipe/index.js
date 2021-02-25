import React, { useState, useEffect, useLayoutEffect } from "react";
import { Card, Image } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiUsers } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";

function CourseCarousel({ width, height }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3500,
    // centerMode:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  const SwiperStyle={height:"auto",width:"100px"}

  return (
    <Slider {...settings}>
      <div >
     <img style={SwiperStyle} src="images/companiesLogos/deloitte-logo.png"    />
     </div>
     <div >
     <img   style={SwiperStyle} src="images/companiesLogos/gartner-logo.png"    />
     </div>
     <div >
     <img   style={SwiperStyle} src="images/companiesLogos/infosys.png"    />
     </div>
     <div >
     <img  style={SwiperStyle} src="images/companiesLogos/intel-logo.png"     />
     </div>
     <div >
     <img  style={SwiperStyle} src="images/companiesLogos/jade-jade-global.png"    />
     </div>
 
    </Slider>
  );
}

export default CourseCarousel;
