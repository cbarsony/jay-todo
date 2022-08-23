import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFilteredTodos } from '../store/selectors'
import TodoItem from './TodoItem'
import useApi from '../hooks/api'
import todosSlice from '../slices/todosSlice'

function TodoList() {
    const filteredTodos = useSelector(getFilteredTodos)
    const dispatch = useDispatch()
    const api = useApi()

    const handleToggle = useCallback(todo => {
        api.put(`/todos/${todo.id}`, todo)
            .then(response => {
                dispatch(todosSlice.actions.updated(response.data))
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
