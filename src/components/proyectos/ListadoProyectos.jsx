import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyectos = () => {
    // Extraer proyectos de initial state
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, getProyectos } = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect( () => {
        getProyectos()
    }, []);

    // Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p className="rosa">No hay proyectos, comienza agregando uno.</p>;


    return (  
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        timeout={300}
                        classNames="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListadoProyectos;