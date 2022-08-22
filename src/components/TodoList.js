import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem'
import { getFilteredTodos } from '../stores/selectors'
import useApi from '../hooks/api'

function TodoList() {
    const filteredTodos = useSelector(getFilteredTodos)
    const dispatch = useDispatch()
    const api = useApi()

    const handleToggle = useCallback(todo => {
        /* api.put(`/todos/${todo.id}`, todo) */
        api.put(`/todos/666`, todo)
            .then(response => {
                dispatch({type: 'todos/updated', payload: response.data})
            })
    }, [api, dispatch])

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
