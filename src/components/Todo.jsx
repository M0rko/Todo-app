import React from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import useTodo from '../hooks/useTodo';
import '../styles/Todo.css';
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const { filtered, todoFilter, submitUpdate, edit, SetEdit } = useTodo(todos, updateTodo);

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div>
      <div className="buttons">
        <button className="filter-button" onClick={() => todoFilter('all')}>
          All
        </button>
        <button className="filter-button" onClick={() => todoFilter(true)}>
          Completed
        </button>
        <button className="filter-button" onClick={() => todoFilter(false)}>
          Uncompllited
        </button>
      </div>
      {filtered.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
            <TiEdit
              onClick={() => SetEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
