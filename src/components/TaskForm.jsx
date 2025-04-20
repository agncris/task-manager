import { useState } from 'react';
function TaskForm({ addTask }) {
 const [task, setTask] = useState('');
 const handleSubmit = (e) => {
 e.preventDefault();
 addTask(task);
 setTask('');
 };
 return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
    <input
    type="text"
    className="form-control"
    placeholder="Nueva tarea"
    value={task}
    onChange={(e) => setTask(e.target.value)}
    />
    <button type="submit" className="btn btn-primary">
    Agregar
    </button>
    </form>
    );
   }
   export default TaskForm;