
import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { v4 as uuidv4 } from 'uuid';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA, 
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

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
        errortarea: false,
        tareaseleccionada: null
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
        tarea.id = uuidv4();
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

    // Cambia el estado de cada tarea 
    const cambiarTareaStatus = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // Extrae una tarea para edicion 
    const saveTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // Edita o modifica una tarea 
    const updateTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    // Eliminar tareaseleccionada 
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                getTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarTareaStatus,
                saveTareaActual,
                updateTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;