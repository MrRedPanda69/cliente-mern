import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la funcion del contexto de tarea 
    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, getTareas, updateTarea, saveTareaActual } = tareasContext;

    // Extraer el proyecto
    const [proyectoActual] = proyecto;

    // Funcion para eliminar tarea al dar click al boton 
    const deleteTarea = id => {
        eliminarTarea(id, proyectoActual._id);
        getTareas(proyectoActual.id);
    }

    // Funcion que modifica el estado de las tareas
    const changeStatus = tarea => {
        tarea.estado ? tarea.estado = false : tarea.estado = true;
        updateTarea(tarea);
    }

    // Agrega una tarea acutal cuando el user quiere editarla
    const seleccinarTarea = tarea => {
        saveTareaActual(tarea);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                { tarea.estado
                    ? (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => changeStatus(tarea)}
                        >Completo</button>
                    )
                    : (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => changeStatus(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccinarTarea(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => deleteTarea(tarea._id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;