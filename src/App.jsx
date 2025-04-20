import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'; // Importa el archivo CSS

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  // Simula la carga inicial de tareas
  useEffect(() => {
    setTasks(['Tarea 1', 'Tarea 2']);
  }, []);

  // Maneja el envío del formulario
  const addTask = (task) => {
    if (!task) {
      setError('La tarea no puede estar vacía');
      return;
    }
    setTasks([...tasks, task]);
    setError('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <div className="container mt-4">
        <h1 className="text-center">Lista de Tareas</h1>
        {error && <p className="text-danger">{error}</p>}
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;