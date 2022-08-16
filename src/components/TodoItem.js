import { connect } from 'react-redux'

function TodoItem({todo, toggle}) {
    const handleChange = () => {
        toggle(todo.id)
    }

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

function mapDispatchToProps(dispatch) {
    return {
        toggle: todoId => dispatch({
            type: 'todos/toggled',
            payload: todoId,
        })
    }
}

export default connect(null, mapDispatchToProps)(TodoItem)
