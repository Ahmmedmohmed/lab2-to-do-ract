import React, { useState } from 'react';
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddTask() {
    const [tasks, setTasks] = useState([]);
    const [taskValue, setTaskValue] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        if (taskValue.trim() !== '') {
            setTasks([...tasks, taskValue]);
            setTaskValue(''); // Clear the input field
        }
    };

    const handleDelete = (indexToDelete) => {
        setTasks(tasks.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="container mt-5">
            <div className="bg-primary text-white p-3 rounded">
                <h1 className="d-flex justify-content-center">TO-DO APP!</h1>
            </div>
            <form  className="mt-3">
                <div className="mb-3">
                    <label className="form-label">Add New To-DO</label>
                    <input
                        className="form-control"
                        type="text"
                        value={taskValue}
                        onChange={(e) => setTaskValue(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" onClick={handleAdd} >Add</button>
            </form>
            <div id="task-list" className="mt-3">
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        name={task}
                        onDelete={() => handleDelete(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default AddTask;
