import { useCallback } from 'react'

function TodoItem({todo, onToggle}) {
    const handleChange = useCallback(() => {
        onToggle(todo.id)
    }, [onToggle, todo.id])

    return (
        <div>
            <span>{todo.text}</span>
            <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={handleChange}
            />
        </div>
    )
}

export default TodoItem
