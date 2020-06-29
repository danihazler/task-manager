import React, {useContext, useState, useEffect } from 'react';
import { TaskListContext } from 'context/TaskListContext';

export const TaskForm = () => {
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);
    const [description, setDescription] = useState("");

    const handleChange = evt => {
        setDescription(evt.target.value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        if(!editItem) {
            addTask(description);
            setDescription("");
        }else {
            editTask(description, editItem.id);
        }
    }

    useEffect(() => {
        if(editItem) {
            setDescription(editItem.description);
        } else {
            setDescription("");
        }
    },[editItem]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                required
                type="text"
                className="task-input"
                placeholder="Add Task..."
                onChange={handleChange}
                value={description}
            />
            <div className="buttons">
                <button 
                    type="submit" 
                    className="btn add-task-btn"
                >
                    {editItem ? 'Update Task' : 'Add Task'}
                </button>
                <button 
                    className="btn clear-btn"
                    onClick={clearList}
                >
                    Clear List
                </button>
            </div>
        </form>
    )
}