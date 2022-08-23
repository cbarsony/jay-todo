import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoManager from './TodoManager'
import QueryFilter from './QueryFilter'
import useApi from '../hooks/api'
import todosSlice from '../slices/todosSlice'

const TodoApp = () => {
    const dispatch = useDispatch()
    const api = useApi()

    useEffect(() => {
        api.get('/todos')
            .then(response => dispatch(todosSlice.actions.loaded(response.data)))
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
