import './App.css';
import React, { useState } from 'react';
import Todosrch from './components/Todosrch';
import TodoList from './components/Todolist'
function App() {
  let savedItems = JSON.parse(localStorage.getItem('storedItem'))
  const [items, setItems] = useState([...savedItems]);
  localStorage.setItem('storedItem', JSON.stringify(items));
  console.log(items)
  return (
    <>
      <div className='container' >
        <h1 className='heading' >Todo List</h1>
        <Todosrch items={items} setItems={setItems} />
        <TodoList items={items} setItems={setItems} />
      </div>
    </>

  )
}

export default App;
