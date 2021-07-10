import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL
} from '../../types';

const ProyectoState = props => {

    const proyectos = [
        {id:1, nombre: 'Tienda Virtual'},
        {id:2, nombre: 'Intranet'},
        {id:3, nombre: 'Diseño de Sitio Web'},
        {id:4, nombre: 'RestAPI'}
    ]

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Serie de funciones para el CRUD 
    const showFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const getProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // Agregrar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();

        // Insertar proyecto al state 
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // Validar form por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // seleccion el proyecto al que el user dio click 
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                showFormulario,
                getProyectos,
                agregarProyecto, 
                mostrarError,
                proyectoActual
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;