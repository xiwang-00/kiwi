import React from 'react';

const SearchItem = ({language}) => {
    return (
        <ul className='seach-top-list'>
            <li>{language.search2}</li>
            <li>{language.search3}</li>
            <li>{language.search4}</li>
            <li>{language.search5}</li>
            <li>г.Ташкент</li>
            <li>г.Термез</li>
            <li>г.Самарканд</li>
        </ul>
    );
};

export default SearchItem;