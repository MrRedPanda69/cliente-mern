import React, { useContext, useEffect } from 'react';
import authContext from '../../context/autenticacion/authContext';

const Barra = () => {

    // Extraer info de auth 
    const AuthContext = useContext(authContext);
    const { usuario, userAuth, logOff } = AuthContext;

    useEffect(() => {
        userAuth();
        // eslint-disable-next-line
    }, []);

    return (  
        <header className="app-header">
            {usuario ? <p className="nombre-usuario gris">Hola <span>{usuario.nombre}</span></p> : null}
            <nav className="nav-principal">
                <button
                    className='btn btn-blank gris'
                    onClick={ () => logOff() }
                >Cerrar Sesión</button>
            </nav>
        </header>
    );
}

export default Barra;