
import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA
} from '../../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { nombre: 'Elegir Plataforma', status: true, proyectoId: 1},
            { nombre: 'Elegir Colores', status: false, proyectoId: 2},
            { nombre: 'Elegir Métodos de Pago', status: true, proyectoId: 3},
            { nombre: 'Elegir Cargo Mensual', status: false, proyectoId: 4},
            { nombre: 'Elegir Plataforma', status: true, proyectoId: 2},
            { nombre: 'Elegir Colores', status: false, proyectoId: 1},
            { nombre: 'Elegir Métodos de Pago', status: true, proyectoId: 3},
            { nombre: 'Elegir Plataforma', status: true, proyectoId: 4},
            { nombre: 'Elegir Colores', status: false, proyectoId: 2},
            { nombre: 'Elegir Métodos de Pago', status: true, proyectoId: 3}
        ],
        tareasproyecto: null 
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

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                getTareas,
                agregarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;