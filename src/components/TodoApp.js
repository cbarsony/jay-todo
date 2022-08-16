import { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoManager from './TodoManager'

const getNewFilterState = (filterState, action) => {
    
}

function TodoApp() {
    const [filter, setFilter] = useState('ALL')

    const handleChangeFilter = action => {
        const newFilterState = getNewFilterState(filter, action)
        setFilter(newFilterState)
    }

    /* const filteredTodos = todos.filter(todo => {
        if(filter === 'ALL') {
            return true
        }

        if(todo.isCompleted) {
            return filter === 'COMPLETED'
        }
        else {
            return filter === 'PENDING'
        }
    }) */

    return (
        <div>
            <AddTodo />
            <TodoList />
            <TodoManager />
        </div>
    )
}

export default TodoApp
