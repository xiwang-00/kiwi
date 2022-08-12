import React from 'react';
import './SearchTop.css';
import { AppContext } from '../../contexts/AppContext';
import { SearchItem ,SearchForm} from '../../components';
const SearchTop = ({setMaxValue}) => {
    const { language } = React.useContext(AppContext);
    return (
        <div className='container'>
            <div className='search-top'>
                <div className='serch-top-item'>
                    <input placeholder={language.search1} className='search-input' type="text" />
                </div>
                <SearchItem language={language}/>
                <SearchForm setMaxValue={setMaxValue} language={language}/>
            </div>
        </div>
    );
};

export default SearchTop;