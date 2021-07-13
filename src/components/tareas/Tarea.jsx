import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/proyectos/tareas/tareaContext';

const Tarea = ({tarea}) => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la funcion del contexto de tarea 
    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, getTareas } = tareasContext;

    // Extraer el proyecto
    const [proyectoActual] = proyecto;

    // Funcion para eliminar tarea al dar click al boton 
    const deleteTarea = id => {
        eliminarTarea(id);
        getTareas(proyectoActual.id);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                { tarea.status
                    ? (
                        <button
                            type="button"
                            className="completo"
                        >Completo</button>
                    )
                    : (
                        <button
                            type="button"
                            className="incompleto"
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => deleteTarea(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;