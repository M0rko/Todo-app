import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])
    const [completedTasks, setCompletedTasks] = useState(0)
    const [uncompletedTasks, setUnompletedTasks] = useState(0)


    const isCompleted = () => {
        const uncomplited = todos.filter(item => item.isComplete !== true)
        console.log(uncomplited)
        setUnompletedTasks(uncomplited.length)
    }

    useEffect(() => {
        isCompleted()
    }, [todos, completedTasks])


    const AddTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text) || todo.text.length >= 50) // remove extra spsces
        {
            return
        }
        else {
            const newTodos = [todo, ...todos]
            setTodos(newTodos)


        }



    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) // remove extra spsces
        {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (id) => {

        console.log(todos)
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)

    }





    const completeTodo = id => {
        let uptatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete

            }
            return todo;
        })
        const completed = uptatedTodos.filter((item) => item.isComplete === true)

        setCompletedTasks(completed.length)
        setTodos(uptatedTodos)
    }
    return (
        <div>
       
            <h1>What's the plan for Today</h1>
            <TodoForm onSubmit={AddTodo} />
            <p className='completed-tasks'>Completed Tasks: {completedTasks}</p>
            <p className='uncompleted-tasks'>Uncomplited Tasks: {uncompletedTasks}</p>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
