import React from 'react';
import './Card.css';
import { AppContext } from '../../contexts/AppContext';
import { CardItems } from '..';
const Card = ({cardElem}) => {
    const {allItem = [] ,search} = React.useContext(AppContext);
    return (
        <div className='card-list'>
            {allItem.slice(0,cardElem).filter((e)=>(e.title.toLowerCase().includes(search.toLowerCase())))
            .map((e)=>(<CardItems key={e.id} item={e}/>))} 
        </div>
    );
};

export default Card;