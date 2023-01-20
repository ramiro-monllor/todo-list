import '../hojas-de-estilo/Tarea.css'
import { FcFullTrash } from "react-icons/fc";

export default function Tarea ({id, texto, completada, completarTarea, eliminarTarea}){

    return(
        <div className={completada ? "contenedor-tarea completada" : "contenedor-tarea"}>
            <div className="tarea-texto" onClick={() => completarTarea(id)}>
                <p className='textito'>{texto}</p>
            </div>
            <div onClick={() => eliminarTarea(id)}>
                <FcFullTrash className="tarea-icono" />
            </div>
        </div>
    )
}