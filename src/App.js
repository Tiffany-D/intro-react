import './App.css';
import './components.css';
import Todos from './addTodos';
import List from './ListOfTodos';
import React, { useState } from 'react';




export function App(todos) {
  const [add, setAdd] = useState([]);
  
  function addToList(todo) {
    setAdd([todo, ...add]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <Todos addToList={addToList} />
      <List add={add}/>
    </div>
    
  );
}

export default App;
