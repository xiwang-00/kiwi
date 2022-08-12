import React from 'react';
import './Register.css';
import { AppContext } from '../../contexts/AppContext';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const { language, setNameVal, nameval } = React.useContext(AppContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onBlur" });
    const onSubmit = (data) => {
        setNameVal({ ...data, ...nameval });
        reset();
        navigate('/');
    }
    return (
        <div className='register'>
            <form onSubmit={handleSubmit(onSubmit)} className='register__block'>
                <label className='sign-lable'>
                    <input {...register("password", { required: true })} placeholder='Password' type="password" />
                    {errors.password && <span>This field is required</span>}
                </label>
                <label className='sign-lable'>
                    <input {...register("email", { required: true })} placeholder='Email' type="email" />
                    {errors.email && <span>This field is required</span>}
                </label>
                <div className='signblok'>
                    <button className='sign-link'>Далее</button>
                </div>
                <div className='sign-bottm'>
                    <span></span>или<span></span>
                </div>
                <a className='sign-links' href="#">{language.sign4}</a>
            </form>
        </div>
    );
};

export default Register;