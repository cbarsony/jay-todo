import { useState } from 'react'
import { useDispatch } from 'react-redux'

function AddTodo() {
    const [todoText, setTodoText] = useState('')
    const dispatch = useDispatch()

    const handleAddTodo = () => {
        dispatch({type: 'todos/added', payload: todoText})
        setTodoText('')
    }

    return (
        <div>
            <input
                value={todoText}
                onChange={e => setTodoText(e.target.value)}
                type="text"
            />
            <button
                onClick={handleAddTodo}
            >+</button>
        </div>
    )
}

export default AddTodo
