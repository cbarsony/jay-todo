import { useCallback } from 'react'
//import { useDispatch } from 'react-redux'
//import { useHistory } from 'react-router-dom'
import useApi from '../hooks/api'

const Logout = () => {
    const api = useApi()
    //const history = useHistory()
    //const dispatch = useDispatch()

    const onLogoutClick = useCallback(async() => {
        await api.get('/logout')
        // Should do this instead of redirect
        /* history.push('/login')
        dispatch({type: 'reset'}) */
        window.location = '/login'
    }, [api])

    return (
        <div>
            <button
                onClick={onLogoutClick}
            >Log out</button>
        </div>
    )
}

export default Logout
