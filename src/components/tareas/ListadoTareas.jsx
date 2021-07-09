import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', status: true },
        { nombre: 'Elegir Colores', status: false },
        { nombre: 'Elegir Métodos de Pago', status: false },
        { nombre: 'Elegir Cargo Mensual', status: true }
    ]

    return (  
        <Fragment>
            <h2 className="gris">Proyecto: Tienda Virtual</h2>

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
        </Fragment>
    );
}

export default ListadoTareas;