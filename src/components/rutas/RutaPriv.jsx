import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

const RutaPriv = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const { autenticado,loading, userAuth } = authContext;

    useEffect(() => {
        userAuth();
        // eslint-disable-next-line
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