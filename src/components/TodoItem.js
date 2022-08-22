import { useCallback } from 'react'

function TodoItem({todo, onToggle}) {
    const handleChange = useCallback(e => {
        onToggle({
            ...todo,
            is_completed: e.target.checked,
        })
    }, [onToggle, todo])

    return (
        <div>
            <span>{todo.text}</span>
            <input
                type="checkbox"
                checked={todo.is_completed}
                onChange={handleChange}
            />
        </div>
    )
}

export default TodoItem
