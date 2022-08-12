import React from 'react';
import './HeaderBootom.css';
import { AppContext } from '../../../contexts/AppContext';
import { Link } from 'react-router-dom';
const HeaderBootom = ({ info }) => {
    const { language, setCategory, search, setSearch } = React.useContext(AppContext);
    return (
        <div className={info ? 'act-class' : ''}>
            <div className='container header-bottoms'>
                <div className='header-bottom'>
                    <select onChange={(e) => setCategory(e.target.value)} className='header-bottom-select'>
                        <option value={'1'}>{language.headerBot1}</option>
                        <option value="/electronics">Electronics</option>
                        <option value="/jewelery">Jewelery</option>
                        <option value="/men's clothing">Men's clothing</option>
                        <option value="/women's clothing">Women's clothing</option>
                    </select>
                    <div className='header-bottom-input'>
                        <input value={search} onChange={(e)=>setSearch(e.target.value)} 
                        placeholder={language.headerBot2} type="text" />
                    </div>
                    <div className='header-bottom-rit'>
                        <p>{language.headerBot3}</p>
                        <Link to='/search'>{language.headerBot4}</Link>
                    </div>
                </div>
                <Link className='header-bottom-link' to='/'><span>+</span>{language.headerBot5}</Link>

            </div>
        </div>

    );
};

export default HeaderBootom;