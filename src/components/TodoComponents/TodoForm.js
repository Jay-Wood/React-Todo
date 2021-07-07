import React from "react";

//add items to list: input

class ToDoForm extends React.Component  {
    constructor() {
        super();
        this.state = {
            item: ""
        };
    }

    handleChanges = event => (
        this.setState(
            { [event.target.name]: event.target.value }
        )
    )

    submitItem = event => {
        event.preventDefault()
        this.props.addItem(this.state.item)

    }
    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input 
                    type="text" 
                    placeholder="Add new item"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChanges}
                />
                <button>Add Item</button>
                <button>Clear Completed Items</button>
            </form>
        )
    }   
}

export default ToDoForm;