import React from 'react'
import './Todo.css'
import { useState } from 'react'
const TodoList = () => {
    const data = [
        {
            newTask: "Hoc ReactJs va lam do an",
            deadline: "23/10/2021"
        },

        {
            newTask: "Hoc ReactJs",
            deadline: "23/10/2021"
        }
    ]
    const [newTask, setNewTask] = useState('')
    const [deadline, setDeadline] = useState('')
    const handleClickAdd = (e) => {
        e.preventDefault();
        // console.log(newTask)
        const AddTask = {
            newTask: newTask,
            deadline: deadline
        };
        console.log(AddTask);
        setTodos([...todos, AddTask])
        setNewTask('');
    };
    const [todos, setTodos] = useState(data);
    return (
        <section className="container-todoList">
        <form className="form-add-todo">
            <section className="form-input">
                <label>New Task:</label>
                <div className="input">
                    <input value={newTask} onChange={(e) => {setNewTask(e.target.value);
                     /*console.log(newTask)*/;}} 
                    className="effect" type="text" />
                        <span className="focus-border">
                        <i></i>
                        </span>
                </div>
            </section>
            <section className="form-input">
                <label>Deadline:</label>
                <div className="input">
                    <input  onChange={(e) => {setDeadline(e.target.value); console.log(deadline);}} 
                    className="effect" type="text" />
                        <span className="focus-border">
                        <i></i>
                        </span>
                </div>
            </section>
            <button onClick={handleClickAdd} className=" custom-btn add-new-task">ADD</button>
        </form>
        <div>
            {todos.map((value, index) => {
                return (
                    <form key={index} className="form-newTask">
                        <div className="deadline">{value.deadline}</div>
                        <div className="newTask">{value.newTask}</div>
                    </form>
                )
            })}
        </div>
        </section>
    )
}

export default TodoList;
