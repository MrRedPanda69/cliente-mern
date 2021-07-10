import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {

    // Obtener State para proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return <h2 className="gris">Selecciona un Proyecto</h2>

    // array destructuring para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', status: true },
        { nombre: 'Elegir Colores', status: false },
        { nombre: 'Elegir Métodos de Pago', status: true },
        { nombre: 'Elegir Cargo Mensual', status: false }
    ];

    const onClickElminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (  
        <Fragment>
            <h2 className="gris">Proyecto: {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
                { tareasProyecto.length === 0
                    ? ( <li className="tarea"><p>No hay tareas</p></li> )
                    : tareasProyecto.map( tarea => (
                        <Tarea 
                            tarea={tarea}
                        />
                    ))               
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