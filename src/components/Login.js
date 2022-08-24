import { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import useApi from '../hooks/api'

const Login = () => {
    const [username, setUsername] = useState('user1')
    const [password, setPassword] = useState('pass')
    const api = useApi()
    const history = useHistory()

    const onUsernameChange = e => setUsername(e.target.value)
    const onPasswordChange = e => setPassword(e.target.value)

    const onLoginClick = useCallback(() => {
        api.post('/login', {username, password})
            .then(response => {
                //console.log(response)
                history.push('/')
            })
    }, [username, password, api, history])

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
