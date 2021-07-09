import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    // Extraer proyectos de initial state
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, getProyectos } = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect( () => {
        getProyectos()
    }, []);

    // Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return null;


    return (  
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProyectos;