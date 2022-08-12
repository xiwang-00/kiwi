import React from 'react';
import HeaderBootom from './HeaderBootom/HeaderBootom';
import HeaderTop from './HeaderTop/HeaderTop';
const Header = ({info, search}) => {
    return (
        <>
            <HeaderTop search={search}/>
            {!search && <HeaderBootom info={info} />}
            
        </>
    );
};

export default Header;