import React from 'react';
import './SliderIten.css';
const SliderItem = ({img,text,setOpen}) => {
    const modalOpen = () => {
        setOpen(true);
        document.body.style.overflow =  "hidden";
    }
    return (
        <li onClick={modalOpen} className='slider-item'>
            <div>
                <img src={img} alt="img" />
            </div>
            <p>{text}</p>
        </li>
    );
};

export default SliderItem;