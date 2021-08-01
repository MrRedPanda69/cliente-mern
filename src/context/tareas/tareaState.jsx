
import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA, 
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

import clienteAxios from '../../config/axios';

const TareaState = props => {
    const initialState = {
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada: null
    }

    // Crear dispatch y state 
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Obtener las tareas de un proyecto
    const getTareas = async proyecto => {
        try {
            const resultado = await clienteAxios.get('/api/tareas', { params: {proyecto} });

            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            });

        } catch (error) {
            console.log(error);
        }
    }

    // Agregar una tarea a un proyecto seleccionado
    const agregarTarea = async tarea => {
        const resultado = await clienteAxios.post('/api/tareas', tarea);
        console.log(resultado);
        try {
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    // Validar y muestra error si es necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        });
    }

    // Eliminar tarea por ID 
    const eliminarTarea = async (id, proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, { params: {proyecto} });

            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    // Edita o modifica una tarea 
    const updateTarea = async tarea => {
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
            console.log(resultado)

            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    // Extrae una tarea para edicion 
    const saveTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

    // Eliminar tareaseleccionada 
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        });
    }

    return (
        <TareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                getTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
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