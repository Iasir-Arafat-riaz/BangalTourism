import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user}=useAuth()
    const location=useLocation()
    return (
        <div>
            {user.email?children:<Navigate state={{from:location}} to="/login"></Navigate>}
        </div>
    );
};

export default PrivateRoute;