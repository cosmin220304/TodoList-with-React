import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


const TodoInput = ({ todos, setTodos }) => {
    const [newTodoValue, setNewTodoValue] = useState()

    const inputChangeHandler = (e) => {
        setNewTodoValue(e.target.value)
    }

    const addTodo = () => {
        const newTodo = {
            id: uuidv4(),
            value: newTodoValue,
            isDone: false
        }
        setTodos(prev => [...prev, newTodo])
    }

    const cleanTodos = () => {
        const cleanTodos = todos.filter(todo => todo.isDone === false);
        setTodos(cleanTodos)
    }

    const resetTodos = () => {
        setTodos([])
    }

    return (
    <div className="todoList__input">
        <div />
        <input onChange={inputChangeHandler} />
        <button onClick={addTodo}>
            Add
        </button>
        <button onClick={cleanTodos}>
            Clean
        </button>
        <button onClick={resetTodos}>
            Reset
        </button>
        <div />
    </div>
    )
}

export default TodoInput
