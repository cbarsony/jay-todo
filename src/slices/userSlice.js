import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        set: (state, action) => action.payload,
    },
})

export default userSlice
