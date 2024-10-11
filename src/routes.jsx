import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from './hooks/useAuth';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';

const PrivateRoute = ({ children }) => {
    const { auth } = useAuth();
    console.log('PrivateRoute auth state:', auth);
    return auth ? children : <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route
                    path='/dashboard'
                    element={
                        <PrivateRoute>
                            <DashboardPage />
                        </PrivateRoute>
                    }
                />
                <Route path='/' element={<Navigate to='/dashboard' />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
