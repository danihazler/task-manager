import React, {useContext} from 'react';
import { TaskListContext } from 'context/TaskListContext';
import { Task } from './Task';

export const TaskList = () => {
    const { tasks } = useContext(TaskListContext);

    return (
        <div>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map(task => (
                        <Task  key={task.id} task={task.description} id={task.id}/>
                    ))}
                </ul>
                ): (
                    <div className="no-tasks">No Tasks</div>
                )}
        </div>
    )
}