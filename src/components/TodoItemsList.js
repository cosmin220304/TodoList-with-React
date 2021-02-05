import React from 'react'
import TodoItem from './TodoItem'

const TodoItemsList = ({ todos, toggleIsDone }) => {
    return (
        <div className="todoList__items">
            {todos.map(todo =>
                <TodoItem key={todo.id} todo={todo} toggleIsDone={toggleIsDone} />
            )}
        </div>
    )
}

export default TodoItemsList
