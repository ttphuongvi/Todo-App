import React, { useState, useEffect, useRef, useContext } from "react";
import './TodoForm.css'
import '../AddTodo/Todo.css'
import {TodoContext} from '../../context/TodoContext'
import {MyContext} from '../../context/MyContext'
const TodoForm = (props) => {
    const [newTask, setNewTask] = useState(props.edit ? props.edit.value : "");
    const [deadline, setDeadline] = useState(props.edit ? props.edit.value : "");
    // const inputRef = useRef(null);
    const {data, setData} = useContext(TodoContext)
    // useEffect(() => {
    //     inputRef.current.focus();
    // });

    const handleTaskChange = (e) => {
        setNewTask(e.target.value);
    };
    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
    };
    const [counter, setCounter] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: newTask,
            deadline: deadline
        });
        setNewTask("");
        setDeadline("");
        const AddTask = {
            newTask: newTask,
            deadline: deadline
        };
        console.log(AddTask);
        setData([...data, AddTask])
        setNewTask('');
        setCounter(counter + 1);
    };
    const {setCount} = useContext(MyContext)
    useEffect(() => {
        console.log('Counter Change');
        setCount(counter);
    },[counter]);

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            {props.edit ? (
                <>
                    <input
                        placeholder="Update todo"
                        value={newTask}
                        onChange={handleTaskChange}
                        name="text"
                        // ref={inputRef}
                        className="todo-input edit"
                    />
                    <input
                        placeholder="Update deadline"
                        value={deadline}
                        onChange={handleDeadlineChange}
                        name="deadline"
                        // ref={inputRef}
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
                                    name="text"
                                    className="effect"
                                    type="text"
                                    // ref={inputRef}
                                />
                                <span className="focus-border">
                                <i></i>
                                </span>
                            </div>
                        </section>
                        <section className="form-input">
                            <label>Deadline:</label>
                            <div className="input">
                                <input value={deadline} 
                                    placeholder="Add Dealine" 
                                    onChange={handleDeadlineChange} 
                                    name="deadline" 
                                    // ref={inputRef}
                                    className="effect"
                                    type="text" />
                                <span className="focus-border">
                                <i></i>
                                </span>
                            </div>
                        </section>
                    <button onClick={handleSubmit} className="custom-btn add-new-task">
                        ADD
                    </button>
                </form>
                <div>Số lượng: {counter}</div>
                </section>
            )}
        </form>
    );
}

export default TodoForm;