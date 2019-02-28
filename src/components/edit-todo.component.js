import React, {Component } from 'react';
import axios from 'axios';

class EditTodo extends Component {
    constructor(props){
        super(props);

        this.state = {
                todo_title: '',
                todo_description: '',
                todo_priority: '',
                todo_completed: false
        }

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoTitle = this.onChangeTodoTitle.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount() {
        axios.get('http://localhost:3006/api/task/'+this.props.match.params.id )
            .then( response => {
                this.setState({
                    todo_title: response.data.task_title,
                    todo_description: response.data.task_description,
                    todo_priority: response.data.task_priority,
                    todo_completed: response.data.task_completed
                })
            })
            .catch( err => {
                console.log(err);
            })
    }
    onChangeTodoTitle(e) {
        this.setState({
            todo_title: e.target.value
        });
    }
    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }
    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            task_title: this.state.todo_title,
            task_description: this.state.todo_description,
            task_priority: this.state.todo_priority,
            task_completed: this.state.todo_completed
        };
        // console.log(obj);
        axios.put('http://localhost:3006/api/task/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                <div className="card">
                    <div className="card-header">Update Todo</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Task Title: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.todo_title}
                                    onChange={this.onChangeTodoTitle}
                            />
                        </div>
                        <div className="form-group">
                            <label>Task Description: </label>
                            <textarea
                                    className="form-control"
                                    value={this.state.todo_description}
                                    onChange={this.onChangeTodoDescription}
                            />
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
                        <div className="form-check">
                            <input  className="form-check-input"
                                    id="completedCheckbox"
                                    type="checkbox"
                                    name="completedCheckbox"
                                    onChange={this.onChangeTodoCompleted}
                                    checked={this.state.todo_completed}
                                    value={this.state.todo_completed}
                            />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                    </div>
                    <div className="card-footer">
                            <input type="submit" value="Update Todo" className="btn btn-primary btn-sm" />
                    </div>
                </div>
                    </form>

            </div>
        )
    }

}

export default EditTodo;
