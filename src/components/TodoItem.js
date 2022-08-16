import {connect} from 'react-redux'

function TodoItem({todo, toggle}) {
    const handleChange = () => {
        toggle(todo.id)
    }

    return (
        <div>
            <span>id: {todo.id} </span>
            <span>text: {todo.text} </span>
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
        toggle: (todoId) => dispatch({
            type: 'todos/toggle',
            payload: todoId,
        })
    }
}

export default connect(null, mapDispatchToProps)(TodoItem)
