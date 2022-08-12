import React from 'react';
import { AddElement, CardItems, FourSlider, SearchContent, SearchTop } from '../../components';
import { AppContext } from '../../contexts/AppContext';
import './BigSearch.css';
const BigSearch = () => {
    const { allItem ,language} = React.useContext(AppContext);
    const [sorted, setSored] = React.useState(15);
    const [maxValue,setMaxValue] = React.useState(99999);
    return (
        <div>
            <SearchTop  setMaxValue={setMaxValue}/>
            <div className='container'>
                <ul className='search-cards'>
                    {allItem
                    .filter((e)=>(e.price < maxValue))
                    .slice(0,sorted)
                    .map((e)=>(<CardItems key={e.id} item={e} />))}
                </ul>
                <AddElement setCardElem={setSored} lang={language.home12} />
                <SearchContent />
                <p className='search-texts'>{language.search7}</p>
                <FourSlider />
            </div>
        </div>
    );
};

export default BigSearch;