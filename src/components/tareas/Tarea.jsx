import React from 'react';

const Tarea = ({tarea}) => {
    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                { tarea.status
                    ? (
                        <button
                            type="button"
                            className="completo"
                        >Completo</button>
                    )
                    : (
                        <button
                            type="button"
                            className="incompleto"
                        >Incompleto</button>
                    )
                }
            </div>
        </li>
    );
}

export default Tarea;