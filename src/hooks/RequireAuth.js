import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./useAuth";



export const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth);
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.username
                ? <Navigate to={ `/Unauthorized` } state={ { from: location } } replace />
                : <Navigate to={ `/login` } state={ { from: location } } replace />
    );
}