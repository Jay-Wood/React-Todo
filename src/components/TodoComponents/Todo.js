import React from "react";


const Todo = (props) => {

    return (
        <div>
            {console.log("props in Todo.js", props)}
            <p>{props.name}</p>
            <button>Complete</button>
        </div>

    )
}

export default Todo;