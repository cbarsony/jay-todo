import {useState} from 'react'
import {connect} from 'react-redux'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoManager from './TodoManager'

const getNewFilterState = (filterState, action) => {
    switch(filterState) {
        case 'ALL':
            if(action === 'c-off') {
                return 'PENDING'
            }
            else if(action === 'p-off') {
                return 'COMPLETED'
            }
            break
        case 'COMPLETED':
            if(action === 'c-off') {
                return 'PENDING'
            }
            else if(action === 'p-on') {
                return 'ALL'
            }
            break
        case 'PENDING':
            if(action === 'c-on') {
                return 'ALL'
            }
            else if(action === 'p-off') {
                return 'COMPLETED'
            }
            break
        default:
            throw new Error(`Unknown filter value: ${filterState}`)
    }
}

function TodoApp({todos, addTodo, toggleTodo}) {
    const [filter, setFilter] = useState('ALL')

    const handleChangeFilter = action => {
        const newFilterState = getNewFilterState(filter, action)
        setFilter(newFilterState)
    }

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
            <AddTodo
                onAddTodo={addTodo}
            />
            <TodoList
                todos={filteredTodos}
            />
            <TodoManager
                filter={filter}
                onChangeFilter={handleChangeFilter}
            />
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
        addTodo: text => dispatch({
            type: 'todos/added',
            payload: text,
        }),
        toggleTodo: () => dispatch({
            type: 'todos/toggled',
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
