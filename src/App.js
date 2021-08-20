import React, {useState, useEffect} from 'react';
import Filters from './components/Filters';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // use efect 

  // set states stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  
  useEffect(() => {
    filterHandler()
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


      />


    
    </>
  );
}

export default App;
