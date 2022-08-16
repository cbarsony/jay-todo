import {connect} from 'react-redux'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoManager from './TodoManager'

function TodoApp({todos, addTodo, toggleTodo}) {
    return (
        <div>
            <AddTodo />
            <TodoList
                todos={todos}
            />
            <TodoManager />
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: () => dispatch({
            type: 'todos/added',
        }),
        toggleTodo: () => dispatch({
            type: 'todos/toggled',
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
