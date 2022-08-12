import React from 'react';
import './info.css';
import { useParams } from 'react-router-dom';
import { CardBlock, FourSlider, InfoContent, InfoImg } from '../../components';
import { GetItem } from '../../api/api';
import { AppContext } from '../../contexts/AppContext';

const Info = () => {
    const { language} = React.useContext(AppContext);
    const [element, setElement] = React.useState({});
    const [cards, setCards] = React.useState(1);
    const param = useParams();
   
    React.useEffect(async () => {
        window.scrollTo(0, 0)
        const result = await GetItem(param.id);
        setElement({ ...result });
    }, [param.id]);
    return (
        <div className='container'>
            <div className='info-block'>
                <h2 className='info-Title'>{element.title}</h2>
                <div className='info-all'>
                    <InfoImg img={element.image} />
                    <InfoContent obj={element} lang={language} />
                </div>
            </div>
            <CardBlock
                lang1={language.info5}
                cardText={cards}
                setCardText={setCards}
                lang2={language.info6} />
            <FourSlider />
        </div>
    );
};

export default Info;