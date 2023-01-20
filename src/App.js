import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='app-tareas'>
      <div className='contenedor-logo'>
        <h1 className='titulo'>To Do List</h1>
      </div>
      <div className='tareas-lista'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
