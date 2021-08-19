import React, {useState} from 'react';
import Filters from './components/Filters';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Form 
      inputText={inputText}
      todos={todos}
      setTodos={setTodos}
      setInputText={setInputText}

      />
      <TodoList todos={ todos } />
      <Filters />


    
    </>
  );
}

export default App;
