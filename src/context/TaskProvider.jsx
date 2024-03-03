/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import taskData from "../assets/data.json";
import taskReducer from "../reducer/TaskReducer";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, taskData);
  const [searchQuery, setSearchQuery] = useState('');
  
    const filteredTasks = tasks.filter( task =>
    {
        return task.title.toLowerCase().includes( searchQuery.toLowerCase() );
        // console.log( filter )
        // return filter;
    } );

  const filterTasks = (query) => {
    setSearchQuery(query);
  };

  return (
    <TasksContext.Provider value={{ tasks, filteredTasks, filterTasks }}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}


export function useTasks() {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
}

export function useTasksDispatch() {
  const context = useContext(TasksDispatchContext);
  if (context === undefined) {
    throw new Error("useTasksDispatch must be used within a TasksProvider");
  }
  return context;
}