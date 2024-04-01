import { createContext  , useContext } from "react";

export const TodoContext =createContext({
    todos : [{
        id : 1,
       todo : "todo msg",
       completed:false,

    }
      

    ]
    ,
      addtodo :(todo)=>{} ,
      update : (id ,todo)=>{},
      delete : (id)=>{},
      toggle : (id)=>{}  
})

export const useTodo =()=>{
    return useContext(TodoContext)
}

export const TodoProvider =TodoContext.Provider