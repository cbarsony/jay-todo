import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
    const todos = useSelector(state => state.todos)
    const filter = useSelector(state => state.filter)
    
    const filteredTodos = todos.filter(todo => {
        if(filter === 'ALL') {
            return true
        }

        if(todo.isCompleted) {
            return filter === 'COMPLETED'
        }
        else {
            return filter === 'PENDING'
        }
    })
    
    return (
        <div>
            {filteredTodos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    )
}

export default TodoList
