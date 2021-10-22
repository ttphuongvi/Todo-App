import React, { useContext } from 'react'
import './Todo.css'
import { useState, useEffect } from 'react'
import { MyContext } from '../../context/MyContext'
import {TodoContext} from '../../context/TodoContext'
// import {useCookies} from 'react-cookie'
// import Datetime from 'react-datetime

const TodoList = (props) => {
    const {data, setData} = useContext(TodoContext)
    // const [newTask, setNewTask] = useState('')
    // const [deadline, setDeadline] = useState('')
    const [newTask, setNewTask] = useState(props.edit ? props.edit.value : "");
    const [deadline, setDeadline] = useState(props.edit ? props.edit.value : "");
    const handleClickAdd = (e) => {
        e.preventDefault();
        // console.log(newTask)
        const AddTask = {
            newTask: newTask,
            deadline: deadline
        };
        console.log(AddTask);
        setData([...data, AddTask])
        // setNewTask('');
        setCounter(counter + 1);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            newTask: newTask,
            deadline: deadline
        });
        setNewTask("");
        setDeadline("");
        
    };
    const [counter, setCounter] = useState(0)
    // const [todos, setTodos] = useState(data);
    const {setCount} = useContext(MyContext)
    useEffect(() => {
        console.log('State Change')
    });

    //Duoc goi lan dau tien
    useEffect(() => {
        console.log('First load log')
    }, []);

    //theo state
    useEffect(() => {
        console.log('Counter Change');
        setCount(counter);
    },[counter]);
    return (
        
        <section className="container-todoList">
            <form className="form-add-todo">
                <section className="form-input">
                    <label>New Task:</label>
                    <div className="input">
                        <input  value={newTask} onChange={(e) => {setNewTask(e.target.value)}} 
                        className="effect" type="text" ></input>
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
                    {/* <Datetime></Datetime> */}
                    </div>
                </section>
            </form>
       <div className="btn"> <button onClick={handleClickAdd} className=" custom-btn add-new-task">ADD</button></div>
        <div>Số lượng: {counter}</div>

    <div>
    {data.map((item) => {
        //process js

        return (
            <>
            <form className="form-newTask">
            {/* {props.edit ? ( */}
                <div className="deadline">{item.deadline}</div>
                <div className="newTask">{item.newTask}</div>
                <button onClick={handleSubmit} className="todo-button edit">
                        Cập nhật
                    </button>
            </form>
            
            </>
        )
    })}
    </div>
         </section>
        
    )
}

export default TodoList;
