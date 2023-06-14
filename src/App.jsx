import { useState, useRef, useReducer } from 'react';
import './App.css';
import TodoItemList from './TodoItemList';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const textInput = useRef(null);

  const addItemHandler = e => {
    e.preventDefault(); 
    let inputName = textInput.current.value;
    if (!inputName) return;
    textInput.current.value = '';

    setTodoItems(prevState => {
      return [...prevState, { id: Math.random(), name: inputName }];
    })
  };

  const deleteItemHandler = id => {
    setTodoItems(prevState => {
      return prevState.filter(each => each.id !== id);
    });
  };

  return (
    <>
      <form className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input type='text' id='item' ref={textInput}/>
        </div>
        <button className='btn' onClick={addItemHandler}>Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <TodoItemList itemList={todoItems} deleteItemHander={deleteItemHandler} />      
    </>
  )
}

export default App
