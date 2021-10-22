import React, { useState, useEffect, useRef, useContext } from "react";
import './TodoForm.css'
import '../AddTodo/Todo.css'
import {TodoContext} from '../../context/TodoContext'
function TodoForm(props) {
    const [newTask, setNewTask] = useState(props.edit ? props.edit.value : "");
    const [deadline, setDeadline] = useState(props.edit ? props.edit.value : "");
    const inputRef = useRef(null);
    const {data, setData} = useContext(TodoContext)
    useEffect(() => {
        inputRef.current.focus();
    });

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
            text: [newTask, deadline]
        });
        setNewTask("");
        setDeadline("");
        const AddTask = {
            newTask: newTask,
            deadline: deadline
        };
        console.log(AddTask);
        setData([...data, AddTask])
        // setNewTask('');
        
    };
    

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            {props.edit ? (
                <>
                    <input
                        placeholder="Cập nhật"
                        value={newTask}
                        onChange={handleTaskChange}
                        name="text"
                        ref={inputRef}
                        className="todo-input edit"
                    />
                    <button onClick={handleSubmit} className="todo-button edit">
                        Cập nhật
                    </button>
                </>
            ) : (
                <>
                    <input
                        placeholder="Thêm công việc"
                        value={newTask}
                        onChange={handleTaskChange}
                        name="text"
                        className="todo-input"
                        ref={inputRef}
                    />
                    <input value={deadline}  onChange={handleDeadlineChange} name="deadline" ref={inputRef}
                    className="effect" />
                    <button onClick={handleSubmit} className="todo-button">
                        Thêm công việc
                    </button>
                </>
            )}
        </form>
    );
}

export default TodoForm;