import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import authContext from '../../context/autenticacion/authContext';

const RutaPriv = ({ component: Component, ...props }) => {

    const AuthContext = useContext(authContext);
    const { autenticado,loading, userAuth } = AuthContext;

    useEffect(() => {
        userAuth();
    }, []);

    return (  
        <Route {...props} render={props => !autenticado && !loading ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        )} />
    );
}

export default RutaPriv;