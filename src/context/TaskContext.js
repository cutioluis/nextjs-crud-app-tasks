/* Paso 1 - Importar nuestra useContext */
import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

/* Paso 2 - Crear nuestro provedor que provvera a nuestra aplicacion */
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, description) => {
    setTasks([...tasks, { title, description, id: uuid() }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks([...tasks.map((task) => (task.id === id ? {...task, ...updatedTask } : task)),
    ]);
  };

  const deleteTask = (id) => {
    setTasks([...tasks.filter(task => task.id !== id)])
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

/* Paso 3  - Crear nuestro custom hook para evitar estar exoirtado */
export const useTask = () => useContext(TaskContext);
