import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useApi from '../hooks/api'
import todosSlice from '../slices/todosSlice'
import userSlice from '../slices/userSlice'
import { getFilteredTodos, getUser } from '../store/selectors'

const useInit = () => {
    const dispatch = useDispatch()
    const api = useApi()
    const todos = useSelector(getFilteredTodos)
    const user = useSelector(getUser)

    useEffect(() => {
        if(user !== null && todos !== null) {
            return
        }
        
        const init = async() => {
            Promise.all([api.get('/me'), api.get('/todos')])
                .then(([meResult, todosResult]) => {
                    dispatch(userSlice.actions.set(meResult.data))
                    dispatch(todosSlice.actions.loaded(todosResult.data))
                })
        }

        init()
        }, [api, dispatch, todos, user]
    )

    const isReady = user !== null && todos !== null
    return isReady
}

export default useInit
