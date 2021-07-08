import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    // State para Proyecto 
    const [ proyecto, setProyecto ] = useState({
        nombre: ''
    });

    // Extraer nombre de proyecto
    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    return (  
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
            >Nuevo Proyecyo</button>

            <form
                className="formulario-nuevo-proyecto"
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