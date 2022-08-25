import { createSlice, createAction } from '@reduxjs/toolkit'

const reset = createAction('reset')

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
    extraReducers: {
        [reset]: (state, action) => {
            return null
        }
    },
})

export default todosSlice
