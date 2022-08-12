import React from 'react';

const AddElement = ({setCardElem,lang}) => {
    return (
        <div className='card-button'>
            <button onClick={() => setCardElem(20)} className='card-add-btn'>{lang}</button>
        </div>
    );
};

export default AddElement;