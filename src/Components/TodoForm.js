import React, {useState} from 'react';

const TodoForm = (props) => {

  const[value,setValue] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault();
    if (value !== "")
    props.addTodo(value)
    setValue("")

  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value = {value} placeholder="What is your today's task" onChange={(e)=>{setValue(e.target.value)}}></input>
      <button type="submit" className='todo-btn'>Add task</button>
    </form>
  );
};

export default TodoForm;
