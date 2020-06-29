import React , { createContext, useState, useEffect } from 'react';

export const TaskListContext = createContext();

export const TaskListContextProvider = ({children}) => {
    const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

    const [tasks, setTasks] = useState(initialState);
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks]);

    const addTask = (description) => {
        setTasks([...tasks, {description, id: Date.now()}])
    }

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearList = () => {
        setTasks([]);
    }

    const findItem = id => {
        const item = tasks.find(task => task.id === id);
        setEditItem(item);
    }

    const editTask = (description, id) =>{
        const newTasks = tasks.map(task => task.id === id ? {description, id} : task);
        setTasks(newTasks);
        setEditItem(null);
    }
    
    return (
        <TaskListContext.Provider
          value={{
            tasks,
            editItem,
            addTask,
            removeTask,
            clearList,
            findItem,
            editTask,
          }}
        >
          {children}
        </TaskListContext.Provider>
    )
}