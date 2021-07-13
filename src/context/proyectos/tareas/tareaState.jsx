
import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
} from '../../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1,nombre: 'Elegir Plataforma', status: true, proyectoId: 1},
            { id: 2,nombre: 'Elegir Colores', status: false, proyectoId: 2},
            { id: 3,nombre: 'Elegir Métodos de Pago', status: true, proyectoId: 3},
            { id: 4,nombre: 'Elegir Cargo Mensual', status: false, proyectoId: 4},
            { id: 5,nombre: 'Elegir Plataforma', status: true, proyectoId: 2},
            { id: 6,nombre: 'Elegir Colores', status: false, proyectoId: 1},
            { id: 7,nombre: 'Elegir Métodos de Pago', status: true, proyectoId: 3},
            { id: 8,nombre: 'Elegir Plataforma', status: true, proyectoId: 4},
            { id: 9,nombre: 'Elegir Colores', status: false, proyectoId: 2},
            { id: 10,nombre: 'Elegir Métodos de Pago', status: true, proyectoId: 3}
        ],
        tareasproyecto: null,
        errortarea: false
    }

    // Crear dispatch y state 
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Crear funciones 


    // Obtener las tareas de un proyecto
    const getTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea a un proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Validar y muestra error si es necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Eliminar tarea por ID 
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                getTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;