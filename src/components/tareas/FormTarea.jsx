import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la funcion del contexto de tarea 
    const tareasContext = useContext(TareaContext);
    const { errortarea, tareaseleccionada, agregarTarea, validarTarea, getTareas, updateTarea, limpiarTarea } = tareasContext;

    // Effect que detecta su hay una tarea seleccionada 
    useEffect(() => {
        tareaseleccionada !== null ? setTarea(tareaseleccionada) : setTarea({nombre: ''});
    }, [tareaseleccionada]);

    // State del form 
    const [tarea, setTarea] = useState({
        nombre: ''
    });

    const { nombre } = tarea;

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // Leer valores del form 
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar 
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        // Revisar si es edicion o nueva tarea 
        if(tareaseleccionada === null) {
            // Agregar la nueva tarea al state de tareas 
            tarea.proyectoId = proyectoActual.id;
            tarea.status = false;
            agregarTarea(tarea);
        } else {
            // Actualizar tarea existente
            updateTarea(tarea);

            // Eliminar tareaseleccionada del state 
            limpiarTarea();
        }

        // Obtener  filtrar las tareas del proyecto actual
        getTareas(proyectoActual.id);

        // reiniciar form 
        setTarea({
            nombre: ''
        })
    }

    return (  
        <div className="formulario">
            { errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null }
            <form 
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTarea;