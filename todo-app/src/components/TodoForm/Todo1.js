import React, { useState, useContext } from "react";
import "./TodoForm.css";
import TodoForm from "./TodoForm";
// import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';
import { TiEdit } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";

const Todo1 = ({ data, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        newTask: "",
        deadline: "",
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            newTask: "",
            deadline: "",
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return data.map((todo, index) => (
        <div
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}
        >
            <div className="deadline" onClick={() => completeTodo(todo.id)}>
                {todo.deadline}
            </div>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.newTask}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
                <TiEdit
                    onClick={() =>
                        setEdit({
                            id: todo.id,
                            newTask: todo.newTask,
                            deadline: todo.deadline,
                        })
                    }
                    className="edit-icon"
                />
            </div>
        </div>
    ));
};

export default Todo1;
