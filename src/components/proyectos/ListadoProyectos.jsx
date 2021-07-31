import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import alertaContext from '../../context/alertas/alertaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyectos = () => {
    // Extraer proyectos de initial state
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, getProyectos } = proyectosContext;

    const AlertaContext = useContext(alertaContext);
    const { alerta, mostrarAlerta } = AlertaContext;


    // Obtener proyectos cuando carga el componente
    useEffect( () => {
        if(mensaje) mostrarAlerta(mensaje.msg, mensaje.categoria);      // si hay error

        getProyectos();

    // eslint-disable-next-line
    }, [mensaje]);

    // Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p className="rosa">No hay proyectos, comienza agregando uno.</p>;


    return (  
        <ul className="listado-proyectos">
            { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
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