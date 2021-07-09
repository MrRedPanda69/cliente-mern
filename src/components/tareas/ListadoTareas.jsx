import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', status: true },
        { nombre: 'Elegir Colores', status: false },
        { nombre: 'Elegir Métodos de Pago', status: true },
        { nombre: 'Elegir Cargo Mensual', status: false }
    ]

    return (  
        <Fragment>
            <h2 className="gris">Proyecto: Tienda Virtual </h2>

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
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}

export default ListadoTareas;