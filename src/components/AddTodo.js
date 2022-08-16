import {useState} from 'react'

function AddTodo({onAddTodo}) {
    const [todoText, setTodoText] = useState('')

    const handleAddTodo = () => {
        onAddTodo(todoText)
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
