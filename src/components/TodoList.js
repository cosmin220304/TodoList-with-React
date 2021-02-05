import React, { useState, useEffect } from 'react'
import TodoItemsList from './TodoItemsList'
import TodoInput from './TodoInput'
import '../assets/TodoList.css'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    var savedTodos = JSON.parse(localStorage.getItem('todo-app-todos')) || []
    setTodos(savedTodos)
    const a = [1,2,3]
        const b = [...a,...a,4]
        console.log(b)
  }, [])

  useEffect(() => {
    localStorage.setItem('todo-app-todos', JSON.stringify(todos))
  }, [todos])

  const toggleIsDone = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = todo.isDone ? false : true
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="todoList">
      <h1>TodoList</h1>
      <TodoItemsList todos={todos} toggleIsDone={toggleIsDone} />
      <TodoInput todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default TodoList
