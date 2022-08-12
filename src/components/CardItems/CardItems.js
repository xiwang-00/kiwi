import React from 'react';
import './CardItems.css';
import { Link } from 'react-router-dom';
const CardItems = ({ item }) => {
    return (
        <Link className='card-item' to={`/info/${item.id}`}>
            <div className='card-item-img'>
                <img className='card-item-imgs' src={item.image} alt="img" />
            </div>
            <div>
                <p className='card-item-text'>{item.title.slice(0, 30)}</p>
                <p className='card-item-price'>price: <span>{item.price}$</span></p>
            </div>
        </Link>
    );
};

export default CardItems;