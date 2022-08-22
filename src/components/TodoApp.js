import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoManager from './TodoManager'
import QueryFilter from './QueryFilter'
import useApi from '../hooks/api'

const TodoApp = () => {
    const dispatch = useDispatch()
    const api = useApi()

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
