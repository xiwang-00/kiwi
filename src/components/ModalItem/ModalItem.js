import React from 'react';
import './ModalItem.css';
const ModalItem = ({text,setInner}) => {
    return (
        <li onClick={()=>setInner(true)} className='modal-list-item'>{text}</li>
    );
};

export default ModalItem;