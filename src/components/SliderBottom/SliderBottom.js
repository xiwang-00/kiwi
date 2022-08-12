import React from 'react';
import './SliderBottom.css';
import Slider from "react-slick";
import imgs from '../../assets/images';
const SliderBottom = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
    };
    return (
        <div className='slider-bottom'>
            <Slider {...settings}>
                <div className='sliderBottom-img'>
                    <img  src={imgs.slide1} alt="img" />
                </div>
                <div className='sliderBottom-img'>
                    <img  src={imgs.slide2} alt="img" />
                </div>
                <div className='sliderBottom-img'>
                    <img  src={imgs.slide3} alt="img" />
                </div>
                <div className='sliderBottom-img'>
                    <img  src={imgs.slide1} alt="img" />
                </div>
                <div  className='sliderBottom-img'>
                    <img src={imgs.slide2} alt="img" />
                </div>
                <div className='sliderBottom-img'>
                    <img  src={imgs.slide3} alt="img" />
                </div>

            </Slider>

        </div>
    );
};

export default SliderBottom;