import React, { useState, useEffect, useContext } from "react";
import "./TodoForm.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo1";
import { MyContext } from "../../context/MyContext";
import { TodoContext } from "../../context/TodoContext";
const TodoList = () => {
    const { data, setData } = useContext(TodoContext);
    const addTodo = (todo) => {
        if (!todo.newTask || /^\s*$/.test(todo.newTask)) {
            return;
        }
        const newTodos = [todo, ...data];
        setData(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.newTask || /^\s*$/.test(newValue.newTask)) {
            return;
        }
        setData((prev) =>
            prev.map((item) => (item.id === todoId ? newValue : item))
        );
    };
    const [counter, setCounter] = useState(0);
    const removeTodo = (id) => {
        const removedArr = [...data].filter((todo) => todo.id !== id);
        setCounter(counter - 1);
        setData(removedArr);
    };

    const completeTodo = (id) => {
        let updatedTodos = data.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        setData(updatedTodos);
    };
    const { count, setCount } = useContext(MyContext);
    useEffect(() => {
        setCount(data.length);
        console.log(`Counter Change ${count}`);
    }); // TODO fix

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(data));
    });

    return (
        <section>
            <TodoForm onSubmit={addTodo} />
            <div className="container-big">
            <div className="container-small">
            <div className="container-count">
                <div className="sum-todos">Number of Todos:</div>
                <div className="count"> {count}</div>
            </div>
            
                <Todo
                    data={data}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                >
                </Todo>
            </div>
            </div>
        </section>
    );
};

export default TodoList;
