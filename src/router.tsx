import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './global.css';

import Error from './pages/error';
import Home from './pages/home';

const Router: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='*' element={<Error status={404} />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </HashRouter>
    )
};

export default Router;