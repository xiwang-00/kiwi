import React from 'react';
import './HomeSlider.css';
import Slider from "react-slick";
import { SliderItem } from '..';
import { AppContext } from '../../contexts/AppContext';
import images from '../../assets/images';
const HomeSlider = ({ setOpen, open }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true

    };
    const { language } = React.useContext(AppContext);
    const len = [
        {
            text: language.home1,
            img: images.slider1,
        },
        {
            text: language.home2,
            img: images.slider2,
        },
        {
            text: language.home3,
            img: images.slider3,
        },
        {
            text: language.home4,
            img: images.slider4,
        },
        {
            text: language.home5,
            img: images.slider5,
        },
        {
            text: language.home6,
            img: images.slider6,
        },
        {
            text: language.home7,
            img: images.slider7,
        },
        {
            text: language.home8,
            img: images.slider8,
        },
        {
            text: language.home9,
            img: images.slider9,
        }
    ]
    return (
        <ul className='slider-list'>

            <Slider {...settings}>
                {len.map((e) => (<SliderItem open={open} setOpen={setOpen} img={e.img} key={e.text} text={e.text} />))}
                {len.map((e) => (<SliderItem open={open} setOpen={setOpen} img={e.img} key={e.text} text={e.text} />))}
            </Slider>

        </ul>
    );
};

export default HomeSlider;