import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useApi from '../hooks/api'
import todosSlice from '../slices/todosSlice'
import userSlice from '../slices/userSlice'
import { getFilteredTodos } from '../store/selectors'

const useInit = () => {
    const [ready, setReady] = useState(false)
    const dispatch = useDispatch()
    const api = useApi()
    const todos = useSelector(getFilteredTodos)

    useEffect(() => {
        if(ready && todos !== null) {
            return
        }
        
        const init = async() => {
            const userResponse = await api.get('/me')
            const todosResponse = await api.get('/todos')
            
            dispatch(userSlice.actions.set(userResponse.data))
            dispatch(todosSlice.actions.loaded(todosResponse.data))
            
            setReady(true)
        }

        init()
        }, [api, dispatch, todos, ready]
    )

    return ready  
}

export default useInit
