import React from 'react';
import './InfoImg.css';
import ImageGallery from 'react-image-gallery';
const InfoImg = ({img}) => {
    const images = [
        {
          original: img,
          thumbnail: img,
        },
        {
          original: img,
          thumbnail: img,
        },
        {
          original: img,
          thumbnail: img,
        },
        
      ];
    return (
        <div className='info-img-content'>
            <ImageGallery  items={images}/>
        </div>
    );
};

export default InfoImg;