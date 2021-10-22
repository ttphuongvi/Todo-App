import React, { useState, useEffect, useContext } from "react";
import './TodoForm.css'
import TodoForm from "./TodoForm";
import Todo from "./Todo1";
import {MyContext} from '../../context/MyContext'
import {TodoContext} from '../../context/TodoContext'
function TodoList() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")?? "[]"));
    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos((prev) =>
            prev.map((item) => (item.id === todoId ? newValue : item))
        );
    };
    const [newTask, setNewTask] = useState(0)
    const [deadline, setDeadline] = useState(0)
    const [counter, setCounter] = useState(0)
    const {setCount} = useContext(MyContext)
    useEffect(() => {
        console.log('Counter Change');
        setCount(counter);
    },[counter]);
    const {data, setData} = useContext(TodoContext)
    const removeTodo = (id) => {
        const removedArr = [...todos].filter((todo) => todo.id !== id);
        setCounter(counter - 1);
        setTodos(removedArr);
        
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    })

    return (
        <section >
            <TodoForm onSubmit={addTodo} />
            <div className="container">
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
            </div>
        </section>
    );
}



export default TodoList;