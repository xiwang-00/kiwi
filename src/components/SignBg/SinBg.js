import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import img from '../../assets/images';

const SinBg = () => {
    const {language} = React.useContext(AppContext);
    return (
        <div className='sign-img'>
            <div className='sign-content'>
                <img className='sign-imgs' src={img.kiwi} alt="logo" />
                <p className='sign-tetx'>{language.sign1}</p>
                <button className='sign-btn'>{language.sign2}</button>
            </div>
        </div>
    );
};

export default SinBg;