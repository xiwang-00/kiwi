import React from 'react';
const CardBlock = ({setCardText,cardText,lang1,lang2}) => {

    return (
        <div className='card-block'>
            <p className='card-block-text'>
                <span
                    onClick={() => setCardText(1)}
                    className={cardText === 1 ? 'activ-sp' : ''}>
                    {lang1}
                </span>
                <span
                    onClick={() => setCardText(2)}
                    className={cardText === 2 ? 'activ-sp' : ''} >
                    {lang2}
                </span>
            </p>
        </div>
    );
};

export default CardBlock;