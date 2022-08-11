import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'



const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [filtered, setFiltered] = useState(todos)

  const [edit, SetEdit] = useState({
    id: null,
    value: ''
  })

  useEffect(() => {
    setFiltered(todos)
  }, [todos])

  const todoFilter = (status) => {
    if (status === "all") {
      setFiltered(todos)
    }
     else if (status === true) {
      const newTodos = [...todos].filter((item) => item.isComplete === true)
        setFiltered(newTodos)
        }
        else if (status !== true) {
          const newTodos = [...todos].filter((item) => item.isComplete !== true)
            setFiltered(newTodos)
        }

  }

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    SetEdit({
      id: null,
      value: ""
    })
  }
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return (<div>
    <div className='buttons'>
      <button className='filter-button' onClick={() => todoFilter('all')}>All</button>
      <button className='filter-button' onClick={() => todoFilter(true)}>Completed</button>
      <button className='filter-button' onClick={() => todoFilter(false)}>Uncompllited</button>
    </div>
    {
      filtered.map((todo, index) => (

        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          {console.log(todos)}
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className='icons'>
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className='delete-icon'
            />
            <TiEdit
              onClick={() => SetEdit({ id: todo.id, value: todo.text })}
              className='edit-icon'
            />
          </div>
        </div>
      ))
    }</div>)
}

export default Todo

// import React, { useState } from 'react';
// import TodoForm from './TodoForm';
// import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';

// const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: ''
//   });

//   const submitUpdate = value => {
//     updateTodo(edit.id, value);
//     setEdit({
//       id: null,
//       value: ''
//     });
//   };

//   if (edit.id) {
//     return <TodoForm edit={edit} onSubmit={submitUpdate} />;
//   }

//   return todos.map((todo, index) => (
//     <div
//       className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
//       key={index}
//     >
//       <div key={todo.id} onClick={() => completeTodo(todo.id)}>
//         {todo.text}
//       </div>
//       <div className='icons'>
//         <RiCloseCircleLine
//           onClick={() => removeTodo(todo.id)}
//           className='delete-icon'
//         />
//         <TiEdit
//           onClick={() => setEdit({ id: todo.id, value: todo.text })}
//           className='edit-icon'
//         />
//       </div>
//     </div>
//   ));
// };

// export default Todo;
