import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Task({ name, onDelete }) {
    return (
        <div className="d-flex justify-content-between align-items-center bg-light p-2 mb-2 border rounded">
            <span>{name}</span>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Task;
