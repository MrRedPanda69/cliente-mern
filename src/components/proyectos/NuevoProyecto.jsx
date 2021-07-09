import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
    // Obtener State para el form 
    const proyectosContext = useContext(proyectoContext);
    const { formulario, showFormulario } = proyectosContext;

    // State para Proyecto 
    const [ proyecto, setProyecto ] = useState({
        nombre: ''
    });

    // Extraer nombre de proyecto
    const { nombre } = proyecto;

    // lee los contenidos del input
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el user envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar proyecto


        // Agregar al state


        // Reiniciar el form

    }

    return (  
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={ () => showFormulario() }
            >Nuevo Proyecto</button>

            { formulario ? 
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre del Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input 
                            type="submit" 
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                            onChange={onChangeProyecto}
                        />
                    </form>
                ) : null
            }
            
        </Fragment>
    );
}

export default NuevoProyecto;