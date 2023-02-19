import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Shared/Loading/Loading';
import auth from './userfirebase.init';

const UserRequireAuth = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        <p className='text-red-500'><small>{error?.message}</small></p>
    }

    if (!user) {
        return <Navigate to='/userLogin' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default UserRequireAuth;