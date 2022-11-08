import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Spinner } from 'react-bootstrap';
const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location  = useLocation();
    

    if(loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
   
};

export default PrivateRouter;


