import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './global.css';

import Login from './pages/login';
import Error from './pages/error';

const Router: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='*' element={<Error status={404} />} />
            </Routes>
        </HashRouter>
    );
};

export default Router;