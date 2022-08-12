import React from 'react';
import './InfoContent.css';
const InfoContent = ({ lang ,obj}) => {
    return (
        <div className='info-content'>
            <p className='info-top-text'><span>{lang.info1}: 4418970 </span> <span>{lang.info2}: 28.04.17 {lang.info3}: 28.04.17</span></p>
            <p className='info-price'>{obj.price} $</p>
            <a className='info-blu-link' href="#">Ташкент, Ташкентская область, Юнусабадский район </a>
            <a className='info-gerin-link' href="#">
                <span className='info-sub-num'>99891 166<span className='info-sub'>****</span></span> <span className='infotext'>{lang.info4}</span>
            </a>
            <a className='info-gerin-link' href="#">
                <span className='info-sub-num'>99891 166<span className='info-sub'>****</span></span> <span className='infotext'>{lang.info4}</span>
            </a>
            <p className='info-after'>Автор обьявлении: <span>Зухриддин Темиров</span></p>
            <p className='info-description'>{obj.description}</p>
        </div>
    );
};

export default InfoContent;