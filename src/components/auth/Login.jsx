import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    // State para iniciar sesion
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // Extraer de user
    const { email, password } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    // cuando el user quiere dar login
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios


        // Pasarlo al action
    }

    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1 className="gris">Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-login btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;