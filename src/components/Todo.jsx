import React from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';

const Todo = ( { text, todo, todos, setTodos }) => {
    const deleteHandler = (id) => {
        console.log(todo)
        setTodos(todo.filter((el) => el.id !== todo.id))

    };
    const completeHandler = () => {
        setTodos(todos.map((item) =>{ 
            if (item.id === todo.id) {
                return{
                    ...item, 
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (

        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <FaCheck />
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <FaTrash />
            </button>
            
            
        </div>
    );
}

export default Todo;
