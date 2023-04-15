
import React, {useState, useEffect} from "react";
import { checkInputWordLength } from "../components/Helpers/InputControl";

export const tasksContext = React.createContext({
    // ONLY for syntax highlighting
    tasks: [],
    filterOn: false,
    emojiesOn: false,
    addTask: () => {},
    updateTasks: () => {},
    toggleEmojies: () => {},
    toggleFilter: () => {},
    clearAllTasks: () => {}
});

export const TasksContextProvider = props => {

    // STATES

    const [tasks, updateTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
          return JSON.parse(savedTasks);
        } else {
          return [];
        }
    });

    const [newTask, setNewTask] = useState(null);
    const [emojiesOn, toggleEmojies] = useState(true);
    const [filterOn, toggleFilter] = useState(false);

    // Task-functions 
    
    const addTask = taskText => {
      setNewTask ({
        taskText: taskText,
        isChecked: false
      })
    };

    const clearAllTasks = () => {
        updateTasks([]);
    }

    // Refactor later: const [taskAppeared, updateTaskAppeared] = useState(false);

    // USE EFFECTS 

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        if (newTask) {
        //  Refactor later: !taskAppeared && updateTaskAppeared(true);
          const hasLongWord = checkInputWordLength(newTask.taskText);
          const updatedTask = {
            ...newTask,
            hasLongWord: hasLongWord
          };
          updateTasks(prevTasks => [...prevTasks, updatedTask]);
        }
      }, [newTask]);

      
    return(
        <tasksContext.Provider
        value={{
            tasks: tasks,
            filterOn: filterOn,
            emojiesOn: emojiesOn,
            addTask: addTask,
            updateTasks: updateTasks,
            toggleEmojies: toggleEmojies,
            toggleFilter: toggleFilter,
            clearAllTasks: clearAllTasks
        }}
        
        >
            {props.children}
        </tasksContext.Provider>
    )

}


