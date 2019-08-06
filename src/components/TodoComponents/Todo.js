import React from "react";


const Todo = (props) => {

    return (
        <div className={`item${props.completed ? '-completed' : ''}`}>
            <p>{props.name}</p>
            <button onClick={() => props.completeItem(props.key)} >Complete Item
            </button>
            {console.log("props inside todo.js", props)}
        </div>

    )
}

export default Todo;