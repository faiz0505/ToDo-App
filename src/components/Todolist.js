import '../App.js'
function TodoList({ items, setItems }) {
  const delItem = (i) => {
    let newItem = [...items];
    newItem.splice(i, 1);
    setItems(newItem)
  }
  return (
    <>
      <div className='todoBox' >
        <div className='todoBoxHeading' ><h3>List</h3></div>
        <ul className='todoList' >
          {
            items.map((item, i) => {
              return (
                <li key={i} className='todoItem' >
                  <p>{item}</p>
                  <button onClick={() => delItem(i)} className='dltBtn' >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </li>
              )
            })
          }

        </ul>
      </div>
    </>
  )
}
export default TodoList;