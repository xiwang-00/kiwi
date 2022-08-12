import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import { useForm } from 'react-hook-form';
import { useNavigate} from 'react-router-dom';
const Formin = () => {
    const { language ,setNameVal } = React.useContext(AppContext);
    const navigate = useNavigate();
    const { register, handleSubmit,reset, formState: { errors } } = useForm({mode:"onBlur"});
    const onSubmit = ( data )=> {
        setNameVal({...data});
        reset();
        navigate('register');
    } 
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='sign-form'>
            <div className='sign__block'>
                <h2 className='sign__title'>{language.sign3}</h2>
                <label className='sign-lable'>
                    <input {...register("Name",{ required: true })} placeholder='Темиров Зухриддин' type="text" />
                    {errors.Name && <span>This field is required</span>}
                </label>
                <div className='signblok'>
                    <button className='sign-link'>Далее</button>
                </div>
                <div className='sign-bottm'>
                    <span></span>или<span></span>
                </div>
                <a className='sign-links' href="#">{language.sign4}</a>
            </div>
        </form>
    );
};

export default Formin;