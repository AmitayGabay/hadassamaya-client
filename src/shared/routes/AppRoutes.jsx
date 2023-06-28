import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../components/pages/home/Home';
import Login from '../../components/pages/connection/Login';
import Manager from '../../components/pages/management/Manager';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='manager' element={<Manager />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;