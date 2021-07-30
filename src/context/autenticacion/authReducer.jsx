import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

const authReducer = (state, action) => {
    switch(action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                loading: false
            }

        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                loading: false
            }

        case CERRAR_SESION:
        case LOGIN_ERROR: 
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                usuario: null,
                autenticado: null,
                token: null,
                mensaje: action.payload,
                loading: false
            }

        default:
            return state;
    }
}

export default authReducer;