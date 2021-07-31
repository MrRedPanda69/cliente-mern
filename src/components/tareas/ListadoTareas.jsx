import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTareas = () => {

    // Obtener State para proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Obtener las tareas del proyecto 
    const tareasContext = useContext(TareaContext);
    const { tareasproyecto } = tareasContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return <h2 className="gris">Selecciona un Proyecto</h2>

    // array destructuring para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    const onClickElminar = () => {
        eliminarProyecto(proyectoActual._id)
    }

    return (  
        <Fragment>
            <h2 className="gris">Proyecto: {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
                { tareasproyecto.length === 0
                    ? ( <li className="tarea"><p>No hay tareas</p></li> )
                    : 
                    <TransitionGroup>
                        {tareasproyecto.map( tarea => (
                            <CSSTransition
                                key={tarea.id}
                                timeout={300}
                                classNames="tarea"
                            >
                                <Tarea 
                                    tarea={tarea}
                                />
                            </CSSTransition>
                        ))}               
                    </TransitionGroup>
                }
            </ul>

            <button
                className="btn btn-eliminar"
                onClick={onClickElminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}

export default ListadoTareas;