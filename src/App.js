import React, {useState, useEffect} from 'react';
import Filters from './components/Filters';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // set states stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  
    // use efect

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    
    filterHandler()
    saveLocalTodos()
  }, [todos, status]);

  
  //functions stuff for filtering
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      
      default:
        setFilterTodos(todos);
        break;
      }
    };
 
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));

      }else{
        const todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
      }
    }


  return (
    <>
      <Form 
      inputText={inputText}
      todos={todos}
      setTodos={setTodos}
      setInputText={setInputText}

      />
      <TodoList 
      setTodos={setTodos} 
      todos={ todos }
      filterTodos={filterTodos}

      />
      <Filters 
      setStatus={setStatus}
      status={status}
     
  
      


      />


    
    </>
  );
}

export default App;
