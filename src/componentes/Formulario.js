import React, { useState } from "react";
import '../hojas-de-estilo/Formulario.css';
import {v4 as uuidv4} from 'uuid';

export default function Formulario (props){

    const [input,setInput] = useState("");

    const manejarCambio = e =>{
        setInput(e.target.value);
    }
    
    const manejarEnvio = e => {
        e.preventDefault();
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva)
        setInput("")
    }

    return (
        <form className="tarea-formulario" onSubmit={manejarEnvio}>
            <input 
            className="tarea-input"
            type="text"
            placeholder="Escribe una Tarea"
            name="texto"
            value={input}
            onChange={manejarCambio}/>
            <button 
            className="tarea-boton">
             Agregar Tarea
            </button>
        </form>
    )
}