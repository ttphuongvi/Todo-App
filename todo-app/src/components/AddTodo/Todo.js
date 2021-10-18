import React from 'react'
import './Todo.css'
const Todo = () => {
    return (
        <form className="form-add-todo">
            <section className="form-input">
                <label>New Task:</label>
                <div class="input">
                    <input className="effect-8" type="text" placeholder="Placeholder Text"/>
                        <span className="focus-border">
                        <i></i>
                        </span>
                </div>
            </section>
            <section className="form-input">
                <label>Deadline:</label>
                <div class="input">
                    <input className="effect-8" type="text" placeholder="Placeholder Text"/>
                        <span className="focus-border">
                        <i></i>
                        </span>
                </div>
            </section>
            <button className=" custom-btn add-new-task">ADD</button>
        </form>
    )
}

export default Todo;
