import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

function AddTodo() {
    const [todoText, setTodoText] = useState('')
    const dispatch = useDispatch()

    const onInputChange = useCallback(e => {
        setTodoText(e.target.value)
    }, [])

    const handleAddTodo = useCallback(() => {
        dispatch({type: 'todos/added', payload: todoText})
        setTodoText('')
    }, [dispatch, todoText])

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
