import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : 'Todo msg',
            completed : false,
        }
    ],
    addToDo : (todo ) => {},
    updateToDo : (todo ) => {},
    deleteToDo : (todo ) => {},
    toogleComplete  : (todo ) => {}
});

export const useTodo = () =>{
    return useContext(TodoContext);
}

export const ToDoProvider = TodoContext.Provider;