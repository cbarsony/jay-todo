function TodoItem({todo}) {
    return (
        <div>
            <span>id: {todo.id} </span>
            <span>text: {todo.text} </span>
            <span>completed: {todo.isCompleted ? 'yes' : 'no'}</span>
        </div>
    )
}

export default TodoItem
