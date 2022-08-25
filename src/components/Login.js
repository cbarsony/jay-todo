import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useApi from '../hooks/api'
import useToast from '../hooks/toast'
import userSlice from '../slices/userSlice'

const Login = () => {
    const [username, setUsername] = useState('user1')
    const [password, setPassword] = useState('pass')
    const api = useApi()
    const dispatch = useDispatch()
    const history = useHistory()
    const toast = useToast()

    const onUsernameChange = e => setUsername(e.target.value)
    const onPasswordChange = e => setPassword(e.target.value)

    const onLoginClick = useCallback(() => {
        api.post('/login', {username, password})
            .then(response => {
                if(response.data.loginSuccess) {
                    dispatch(userSlice.actions.set({
                        id: response.data.id,
                        name: response.data.name,
                    }))
                    history.push('/')
                }
                else {
                    toast.error('Username or password is incorrect')
                    setUsername('user1')
                    setPassword('pass')
                }
            })
    }, [username, password, api, history, dispatch, toast])

    return (
        <div>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={onUsernameChange}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={onPasswordChange}
            />
            <button
                disabled={username === '' || password === ''}
                onClick={onLoginClick}
            >Login</button>
        </div>
    )
}

export default Login
