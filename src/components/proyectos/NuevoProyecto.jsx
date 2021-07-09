import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

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
            >Nuevo Proyecto</button>

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
        </Fragment>
    );
}

export default NuevoProyecto;