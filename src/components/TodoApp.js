import { useEffect } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoManager from './TodoManager'
import QueryFilter from './QueryFilter'
import useApi from '../hooks/api'
import { useDispatch } from 'react-redux'

const TodoApp = () => {
    const api = useApi()
    const dispatch = useDispatch()

    useEffect(() => {
        api.get('/todos')
            .then(response => dispatch({type: 'todos/loaded', payload: response.data}))
      }, [api, dispatch])

    return (
        <>
            <QueryFilter />
            <AddTodo />
            <TodoList />
            <TodoManager />
        </>
    )
}

export default TodoApp
