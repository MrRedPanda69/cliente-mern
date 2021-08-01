import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';

import clienteAxios from '../../config/axios';
import authToken from '../../config/authToken';

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        loading: true
    }

    const [state, dispatch] = useReducer(authReducer, initialState); 

    // Funciones
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });

            // Obtener user
            userAuth();

        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            });
        }
    }

    // Retorna user autenticado
    const userAuth = async () => {
        const token = localStorage.getItem('token');
        if(token) authToken(token);

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });

        } catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_ERROR
            });
        }
    }

    // Cuando el user inicia sesion
    const logIn = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });

            // Obtener user
            userAuth();
            
        } catch (error) {
            console.log(error.response.data.msg);

            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }

    // Cierra la sesion del user
    const logOff = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }



    return(
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                loading: state.loading,
                registrarUsuario,
                userAuth,
                logIn,
                logOff
            }}
        >
            {props.children}
        </authContext.Provider>
    );

}

export default AuthState;