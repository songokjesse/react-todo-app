import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import TodoList from "./components/todo-list.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">My Todo App</Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Todos</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Todo</Link>
                  </li>
                </ul>
                  <ul className="navbar-nav">
                      <li className="navbar-item">
                          <Link to="/create" className="nav-link">Login</Link>
                      </li>
                  </ul>
              </div>
            </nav>
            <br/>
          <Route path="/" exact component={TodoList}/>
          <Route path="/edit/:id" component={EditTodo}/>
          <Route path="/create" component={CreateTodo}/>
          </div>
        </Router>
    );
  }
}

export default App;
