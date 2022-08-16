import TodoItem from './TodoItem'

function TodoList({todos}) {
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <span>{todo.text}</span>
                    <span>{todo.isCompleted ? 'i' : 'o'}</span>
                </div>
            ))}
        </div>
    )
}

export default TodoList
