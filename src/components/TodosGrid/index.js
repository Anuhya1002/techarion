import React, { Component } from 'react';

class TodosGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      error: null
    };
  }

  componentDidMount() {
    fetch('https://gorest.co.in/public/v1/todos' ,{
        method: "GET",
        mode: "no-cors",
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
        .then(data => {
        this.setState({ todos: data.data });
        })
        .catch(error => {
        console.log("error");
        });
  }
  
  render() {
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }
    return (
      <div className="todo-list">
        {this.state.todos.map((todo, index) => (
          <div key={index} className="todo-item">
            {todo.title}
          </div>
        ))}
      </div>
    );
  }
}

export default TodosGrid