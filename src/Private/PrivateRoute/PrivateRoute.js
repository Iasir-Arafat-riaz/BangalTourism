import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Shared/Loding/Loading';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user}=useAuth()
    const location=useLocation()
    if(!user.email){
        return <Loading></Loading>
    }
    return (
        <div>
            {user.email?children:<Navigate state={{from:location}} to="/login"></Navigate>}
        </div>
    );
};

export default PrivateRoute;