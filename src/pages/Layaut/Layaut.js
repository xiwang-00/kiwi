import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Header, Footer } from '../../components';

const Layaut = () => {
    return (
        <>
            <header>
                <Routes>
                    <Route path='/' element={<Header />} />
                    <Route path='info/*' element={<Header info />} />
                    <Route path='search' element={<Header search />} />
                    <Route path='signin/*' element={<Header info />} />
                </Routes>

            </header>
            <main>
                <Outlet />
            </main>
            <footer style={{ background: '#282B30' }}>
                <Footer />
            </footer>

        </>
    );
};

export default Layaut;