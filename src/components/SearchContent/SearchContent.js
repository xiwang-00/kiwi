import React from 'react';
import './SearchContent.css';
import { AppContext } from '../../contexts/AppContext';
const SearchContent = () => {
    const { language } = React.useContext(AppContext);
    return (
        <div>
            <h2 className='content__title'>{language.search8}</h2>
            <div className='content__static'>
                <div>
                    <p className='contetn-text'>купить Мясная продукция</p>
                    <p className='content-item'>2 часа назад</p>
                </div>
                <div>
                    <p className='contetn-text'>купить Мясная продукция</p>
                    <p className='content-item'>2 часа назад</p>
                </div>
                <div>
                    <p className='contetn-text'>купить Мясная продукция</p>
                    <p className='content-item'>2 часа назад</p>
                </div>
                <div>
                    <p className='contetn-text'>купить Мясная продукция</p>
                    <p className='content-item'>2 часа назад</p>
                </div>
            </div>
        </div>
    );
};

export default SearchContent;