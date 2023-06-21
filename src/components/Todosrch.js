import '../App.css';
import React, { useState } from "react";
function Todosrch({ items, setItems }) {
  const [val, setVal] = useState('')
  const inputVal = (e) => {
    setVal(e.target.value);
  }
  const addList = () => {
    setItems([...items, val])
    setVal('')
  }
  return (
    <>
      <div className='todosrch' >
        <input type='text' value={val} placeholder='Type Here' onChange={inputVal} />
        <div className='addBtn'>
          <button onClick={addList}> + </button>
        </div>
      </div>
    </>
  )
}
export default Todosrch;