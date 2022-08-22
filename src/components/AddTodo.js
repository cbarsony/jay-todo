import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useApi from '../hooks/api'

function AddTodo() {
    const [todoText, setTodoText] = useState('')
    const api = useApi()
    const dispatch = useDispatch()

    const onInputChange = useCallback(e => {
        setTodoText(e.target.value)
    }, [])

    const handleAddTodo = useCallback(() => {
        api.post('/todos', {text: todoText})
            .then(response => dispatch({type: 'todos/loaded', payload: response.data}))

        setTodoText('')
    }, [api, dispatch, todoText])

    return (
        <div>
            <input
                value={todoText}
                onChange={onInputChange}
                type="text"
                placeholder="Add new todo..."
            />
            <button
                onClick={handleAddTodo}
            >+</button>
        </div>
    )
}

export default AddTodo
