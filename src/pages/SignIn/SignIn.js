import React from 'react';
import './SignIn.css';
import { SinBg } from '../../components';
import { Outlet } from 'react-router-dom';

const SignIn = () => {
   
    return (
        <div className='container'>
            <div className='sign-all'>
                <Outlet />
                <SinBg />
            </div>
        </div>

    );
};

export default SignIn;