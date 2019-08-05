import React from "react";
import Todo from "./Todo";
import ToDoForm from "./TodoForm";

     

const ToDoList = props => {

    return (
        <div>
            <h4>List goes here</h4>
            {props.ToDoArray.map(todo => (
                <Todo 
                  key={todo.id}
                  name={todo.name}
                  completed={todo.completed}  
                  
                />
            ))}
        </div>
    )
}



export default ToDoList;