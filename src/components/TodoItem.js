function TodoItem({todo}) {
    return (
        <div>
            <span>id: {todo.id}</span>
            <span>text: {todo.text}</span>
        </div>
    )
}

export default TodoItem
