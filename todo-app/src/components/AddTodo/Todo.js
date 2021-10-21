import React, { useContext } from 'react'
import './Todo.css'
import { useState, useEffect } from 'react'
import { MyContext } from '../../context/MyContext'
// import {useCookies} from 'react-cookie'
// import Datetime from 'react-datetime
const TodoList = () => {


    const data = [
        {
            id: 1,
            newTask: "Hoc ReactJs va lam do an",
            isCompleted: false,
            deadline: "23/10/2021"
        },

        {
            id: 2,
            newTask: "Hoc ReactJs",
            isCompleted: false,
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
        // setNewTask('');
    };
    const [counter, setCounter] = useState(0)
    const onClickAdd = () => {
        setCounter(counter + 1);
    };
    const [todos, setTodos] = useState(data);
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
       <div className="btn"> <button onClick={onClickAdd} className=" custom-btn add-new-task">ADD</button></div>
        <div>Số lượng: {counter}</div>

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
