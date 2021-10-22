import React, { useState, useEffect, useContext } from "react";
import "./TodoForm.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo1";
import { MyContext } from "../../context/MyContext";
import { TodoContext } from "../../context/TodoContext";
function TodoList() {
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
    const [newTask, setNewTask] = useState(0);
    const [deadline, setDeadline] = useState(0);
    const [counter, setCounter] = useState(0);
    const { setCount } = useContext(MyContext);
    const removeTodo = (id) => {
        const removedArr = [...data].filter((todo) => todo.id !== id);
        setCounter(counter - 1);
        setData(removedArr);
    };

    const completeTodo = (id) => {
        let updatedTodos = data.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setData(updatedTodos);
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(data));
    });

    useEffect(() => {
        console.log("Counter Change");
        setCount(counter);
    }, [counter]);

    return (
        <section>
            <TodoForm onSubmit={addTodo} />
            <div className="container">
                <Todo
                    data={data}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            </div>
        </section>
    );
}

export default TodoList;
