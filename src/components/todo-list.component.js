import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.task_completed ? 'completed': ''}>{props.todo.task_title}</td>
        <td className={props.todo.task_completed ? 'completed' : ''}>{props.todo.task_description}</td>
        <td className={props.todo.task_completed ? 'completed' : ''}>{props.todo.task_priority}</td>
        <td className={props.todo.task_completed ? 'completed' : ''}>{props.todo.created_at}</td>
        <td>
            <Link className="btn btn-primary btn-sm" to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)


class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3006/api/tasks')
            .then(response => {
                this.setState({ todos:  response.data});
            }).catch(err =>{
                console.log(err);
             })
    }
    todoList(){
        return this.state.todos.map((currentTodo, i)=>{
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div className="container">
                <h3><u><b>My Todo List </b></u></h3>

                        <table className="table  table-striped">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Priority</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            { this.todoList() }
                            </tbody>

                        </table>
            </div>
        )
    }

}

export default TodoList;
