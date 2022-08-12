import React from 'react';
import { AddElement, Card, CardBlock, HomeSlider, Modal, SliderBottom } from '../../components';
import { AppContext } from '../../contexts/AppContext';
import { GetRandom, GetItems } from '../../api/api';
import './Home.css';

const Home = () => {
    const [cardElem, setCardElem] = React.useState(15);
    const [botomCard,setBotomCard] = React.useState(4);
    const { language, setAllItem} = React.useContext(AppContext);
    const [open, setOpen] = React.useState(false);
    const [cardText, setCardText] = React.useState(1);
    const [bottom, setBottom] = React.useState(1)
    React.useEffect(async () => {
        if (cardText === 1) {
            const result = await GetItems();
            setAllItem([...result]);
        }
        else {
            const result = await GetRandom();
            setAllItem([...result]);
        }
    }, [cardText]);

    return (
        <>
            <div className='container'>
                <HomeSlider open={open} setOpen={setOpen} />
                {open && <Modal setOpen={setOpen} />}
                <CardBlock
                    cardText={cardText}
                    setCardText={setCardText}
                    lang1={language.home10}
                    lang2={language.home11} />
                <Card cardElem={cardElem} />
                <AddElement setCardElem={setCardElem}  lang={language.home12}/>
            </div>
            <SliderBottom />
            <div>
                <div className='container'>
                    <div className='card-togles'>
                        <CardBlock
                            cardText={bottom}
                            setCardText={setBottom}
                            lang1={language.home12}
                            lang2={language.home13} />
                    </div>
                    <Card cardElem={botomCard} />
                    <AddElement setCardElem={setBotomCard}  lang={language.home12}/>
                </div>
            </div>
        </>

    );
};

export default Home;