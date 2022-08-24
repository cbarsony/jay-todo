import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: null,
    reducers: {
        loaded: (state, action) => {
            return action.payload
        },
        updated: (state, action) => {
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo)
        },
        cleared: () => {
            return []
        },
    },
})

export default todosSlice
