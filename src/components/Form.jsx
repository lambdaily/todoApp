import React from 'react';
import { nanoid } from 'nanoid'


const Form = ({ setInputText, todos, setTodos, inputText }) => {

    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    }


    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text : inputText, completed: false, id : nanoid()}
            
        ]);
        setInputText("");
    }
    return (
        <div className="todo">

        <header className="header">
            <section className="logo">
                <h2 className="logo__title">TODO</h2>

            </section>
            <div className="todo__header">
                <div className="todo__circle">
                </div>

                <label htmlFor="todo-input">Create a new todo</label>
                <form >
                    <input value={inputText} onChange={inputTextHandler} className="todo__input"
                        placeholder="Create a new todo..." />
                    <button onClick={submitTodoHandler} type="submit">+</button>
                </form>

            </div>
        </header>

    </div>

    )


}

export default Form;