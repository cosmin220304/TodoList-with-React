import React from 'react'


const TodoItem = ({ todo, toggleIsDone }) => {
    const checkBoxClickHandler = () => {
        toggleIsDone(todo.id)
    }

    return (
        <div className="todoList__item">
            <div>
                {todo.value}
            </div>
            <input type="checkbox" defaultChecked={todo.isDone} onClick={checkBoxClickHandler}/>
        </div>
    )
}

export default TodoItem
