import React, {useContext} from 'react';
import { TaskListContext } from 'context/TaskListContext';

export const Task = ({task, id}) => {
    const { removeTask, findItem, editTask } = useContext(TaskListContext);

    const handleEdit = id => {
        findItem(id);
        
    }

    return (
        <li className="list-item">
            <span>{task}</span>
            <div>
                <button 
                    className="btn task-btn"
                    onClick={() =>removeTask(id)}
                > 
                    delete 
                </button>
                <button 
                    className="btn task-btn" 
                    onClick={() => handleEdit(id)}
                > 
                    edit
                </button>
            </div>
        </li>
    )
}