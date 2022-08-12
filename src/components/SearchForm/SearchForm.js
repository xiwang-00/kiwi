import React from 'react';
import Slider from '@mui/material/Slider';
function valuetext(value) {
    return `${value}°C`;
}
const SearchForm = ({ language ,setMaxValue}) => {
    const [rangeVal, setRangeval] = React.useState(1);
    const getValues = (e) => {
        setMaxValue(rangeVal)
        e.preventDefault();
    }

    return (
        <form onSubmit={getValues} className='search-form'>
            <div className='search-forms'>
                <p>{language.info7}:</p>
                <div className='search__form'>
                    <Slider
                        onChange={(_, val) => (setRangeval(val))}
                        aria-label="Small steps"
                        defaultValue={10}
                        getAriaValueText={valuetext}
                        step={10}
                        marks
                        min={10}
                        max={1000}
                        valueLabelDisplay="auto"
                    />
                </div>
            </div>
            <button type='submit' className='search-button'>{language.search6}</button>
        </form>
    );
};

export default SearchForm;