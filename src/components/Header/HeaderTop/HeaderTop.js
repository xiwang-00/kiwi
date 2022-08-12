import React from 'react';
import './HeaderTop.css';
import images from '../../../assets/images';
import { Link } from 'react-router-dom';
import { uzb, ru } from '../../../lang/lang';
import { AppContext } from '../../../contexts/AppContext';
const HeaderTop = ({ search }) => {
    const { language, setLanguage, nameval } = React.useContext(AppContext);
    const [activ, setActiv] = React.useState(1);
    console.log(nameval);
    const changeLangru = () => {
        setLanguage(ru)
        setActiv(1)
    };
    const changeLanguz = () => {
        setLanguage(uzb)
        setActiv(2);
    };
    return (
        <div className={search ? 'act-class' : ''}>
            <div className='container header-top'>
                <div className='header-top-logos'>
                    <Link to='/' className='header-top-logo'>
                        <img src={images.logo} alt="logo" />
                    </Link>
                    <p className='header-top-text'>{language.logo}</p>
                </div>
                <ul className='header-top-list'>
                    <li><Link to='/'>{language.headerTop1}</Link></li>
                    <li><Link to='/'>{language.headerTop2}</Link></li>
                    <li><Link to='/'>{language.headerTop3}</Link></li>
                    <li><Link to='/'>{language.headerTop4}</Link></li>
                </ul>
                <div className='header-top-btns'>
                    <button
                        className={activ === 1 ? 'btn-act' : ''}
                        onClick={changeLangru}>
                        Рус</button>
                    |
                    <button
                        className={activ === 2 ? 'btn-act' : ''}
                        onClick={changeLanguz}>
                        O’z</button>
                    {!nameval.password ?
                        <span className='header-top-links'>
                            <Link to='/signin/signup'>Вход    |    Регистрация</Link>
                        </span> : 
                        <span className='user-name'>
                            {nameval.Name[0]}
                        </span>
                    }


                </div>
            </div>
        </div>
    );
};

export default HeaderTop;