import React from 'react';
import { CardItems } from '..';
import { AppContext } from '../../contexts/AppContext';
import Slider from "react-slick";
const FourSlider = () => {
    const {allItem=[]} = React.useContext(AppContext);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
        <div className='infoSlider'>
            <Slider {...settings}>
                {allItem.map((e) => (<CardItems info key={e.id} item={e} />))}
            </Slider>
        </div>
    );
};

export default FourSlider;