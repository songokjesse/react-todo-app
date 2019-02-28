import React, {Component } from 'react';
import axios from 'axios';

class CreateTodo extends Component {
    constructor(props){
        super(props);

        this.state = {
            todo_title: '',
            todo_description: '',
            todo_priority: '',
            todo_completed: false
        }
        this.onChangeTodoTitle = this.onChangeTodoTitle.bind(this);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTodoTitle(e){
        this.setState({
            todo_title: e.target.value
        });
    }
    onChangeTodoDescription(e){
        this.setState({
            todo_description: e.target.value
        });
    }
    onChangeTodoPriority(e){
            this.setState({
                todo_priority: e.target.value
            });
        }

    onSubmit(e){

        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Title: ${this.state.todo_title}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);

        const newTask = {
            task_title: this.state.todo_title,
            task_description: this.state.todo_description,
            task_priority: this.state.todo_priority,
            task_completed: this.state.todo_completed
        }

        axios.post('http://localhost:3006/api/tasks', newTask)
            .then(res =>console.log(res.data));

        // clear our form
        this.setState = {
            todo_title: '',
            todo_description: '',
            todo_priority: '',
            todo_completed: false
        }
    }
    render() {
        return (
            <div className="py-4 container">
                <form onSubmit={this.onSubmit}>
                <div className="card">
                    <div className="card-header">
                        <h3>Create Todo</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Task Title</label>
                            <input className="form-control" type="text" placeholder="Enter Title" value={this.state.todo_title} onChange={this.onChangeTodoTitle} required/>
                        </div>
                        <div className="form-group">
                            <label>Task Description</label>
                            <textarea
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription} required
                            >
                            </textarea>
                        </div>
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input"
                                        type="radio"
                                        name="priorityOptions"
                                        id="priorityLow"
                                        value="Low"
                                        checked={this.state.todo_priority==='Low'}
                                        onChange={this.onChangeTodoPriority}
                                />
                                <label className="form-check-label">Low</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input"
                                        type="radio"
                                        name="priorityOptions"
                                        id="priorityMedium"
                                        value="Medium"
                                        checked={this.state.todo_priority==='Medium'}
                                        onChange={this.onChangeTodoPriority}
                                />
                                <label className="form-check-label">Medium</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input"
                                        type="radio"
                                        name="priorityOptions"
                                        id="priorityHigh"
                                        value="High"
                                        checked={this.state.todo_priority==='High'}
                                        onChange={this.onChangeTodoPriority}
                                />
                                <label className="form-check-label">High</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="form-group">
                            <input type="submit" value="Create Todo" className="btn btn-primary" />
                        </div>
                    </div>
                </div>
                </form>
            </div>
        )
    }

}

export default CreateTodo;
