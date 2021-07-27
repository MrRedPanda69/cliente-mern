import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {
    // Obtener State para proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    // Obtener la funcion del contexto de tarea 
    const tareasContext = useContext(TareaContext);
    const { getTareas } = tareasContext;

    
    // Funcion para agregar el proyecto actual
    const selectProyecto = id => {
        proyectoActual(id);                 // Fijar un proyecto actual
        getTareas(id);                      // Filtrar tareas al dar click
    }

    return (  
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => selectProyecto(proyecto.id) }
            >{proyecto.nombre}</button>
        </li>
    );
}

export default Proyecto;