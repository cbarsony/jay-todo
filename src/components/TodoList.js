import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem'
import {getFilteredTodos} from '../stores/selectors'

function TodoList() {
    const filteredTodos = useSelector(getFilteredTodos)
    const dispatch = useDispatch()

    const handleToggle = useCallback(todoId => {
        dispatch({
            type: 'todos/toggled',
            payload: todoId,
        })
    }, [dispatch])

    return (
        <div>
            {filteredTodos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    )
}

export default TodoList
