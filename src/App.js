import React from 'react';
import ToDoList from "./components/TodoComponents/TodoList";
import { buildFailureTestResult } from '@jest/test-result';
import TodoForm from "./components/TodoComponents/TodoForm";

const ToDoArray = ["rew"];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
      ToDoArray
    }
  }

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ToDoArray: [...this.state.ToDoArray, newItem]
    });
  };

//functions: addToDo, completeToDo, clearCompletedToDos
//change handlers for each function


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
            <h1>You better do this sh*t!</h1>
            <TodoForm 
            addItem={this.addItem}
            />
        </div>
          <ToDoList 
          ToDoArray={this.state.ToDoArray}
          />

      </div>
    );
  }
}

export default App;
