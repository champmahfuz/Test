import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../pages/Shared/Loading/Loading';
import auth from '../userfirebase.init';

const RequireAuthV1 = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/account/signin' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuthV1;