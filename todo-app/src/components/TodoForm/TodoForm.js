import React, { useState } from "react";
import "./TodoForm.css";
import "../AddTodo/Todo.css";
const TodoForm = (props) => {
    const [newTask, setNewTask] = useState(
        props.edit ? props.edit.newTask : ""
    );
    const [deadline, setDeadline] = useState(
        props.edit ? props.edit.deadline : ""
    );
    const handleTaskChange = (e) => {
        setNewTask(e.target.value);
    };
    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            newTask: newTask,
            deadline: deadline,
        });

        setNewTask("");
        setDeadline("");
    };// TODO fix

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            {props.edit ? (
                <>
                    <input
                        placeholder="Update todo"
                        value={newTask}
                        onChange={handleTaskChange}
                        name="newTask"
                        className="todo-input edit"
                    />
                    <input
                        placeholder="Update deadline"
                        value={deadline}
                        onChange={handleDeadlineChange}
                        name="deadline"
                        className="todo-input edit"
                    />
                    <button onClick={handleSubmit} className="todo-button edit">
                        Update
                    </button>
                </>
            ) : (
                <section className="container-todoList">
                    <form className="form-add-todo">
                        <section className="form-input">
                            <label>New Task:</label>
                            <div className="input">
                                <input
                                    placeholder="Add new task"
                                    value={newTask}
                                    onChange={handleTaskChange}
                                    name="newTask"
                                    className="effect"
                                    type="text"
                                />
                                <span className="focus-border">
                                    <i></i>
                                </span>
                            </div>
                        </section>
                        <section className="form-input">
                            <label>Deadline:</label>
                            <div className="input">
                                <input
                                    value={deadline}
                                    placeholder="Add Dealine"
                                    onChange={handleDeadlineChange}
                                    name="deadline"
                                    className="effect"
                                    type="text"
                                />
                                <span className="focus-border">
                                    <i></i>
                                </span>
                            </div>
                        </section>
                        <button
                            onClick={handleSubmit}
                            className="custom-btn add-new-task"
                        >
                            ADD
                        </button>
                    </form>
                </section>
            )}
        </form>
    );
};

export default TodoForm;
