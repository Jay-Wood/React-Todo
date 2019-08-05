import React from "react";


const Todo = (props) => {

    return (
        <div>
            {console.log("props in Todo.js", props.todo)}
            <p>{this.props.todo.name}</p>
            <button>Complete</button>
        </div>

    )
}

export default Todo;