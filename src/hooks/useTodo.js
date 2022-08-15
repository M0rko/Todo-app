import { useState, useEffect } from 'react';
export default function FilterTodo(todos, updateTodo) {
  const [filtered, setFiltered] = useState(todos);

  useEffect(() => {
    setFiltered(todos);
  }, [todos]);

  const [edit, SetEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    SetEdit({
      id: null,
      value: ''
    });
  };
  const todoFilter = (status) => {
    if (status === 'all') {
      setFiltered(todos);
    } else if (status === true) {
      const newTodos = [...todos].filter((item) => item.isComplete === true);
      setFiltered(newTodos);
    } else if (status !== true) {
      const newTodos = [...todos].filter((item) => item.isComplete !== true);
      setFiltered(newTodos);
    }
  };

  return {
    filtered,
    todoFilter,
    submitUpdate,
    edit,
    SetEdit
  };
}
