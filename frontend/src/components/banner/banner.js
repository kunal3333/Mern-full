import React from 'react'
import Slider from "react-slick";

import bannerone from '../../assest/banner/img5.webp'
import bannertwo from '../../assest/banner/img1.webp'


const banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <Slider {...settings}>
    <div><img src ={bannerone} alt=''/></div>
    <div><img src ={bannertwo} alt=''/></div>
    </Slider>
  );
}

export default banner
