import { createSlice } from '@reduxjs/toolkit'

const FILTER_STATE = {
    ALL: 'ALL',
    COMPLETED: 'COMPLETED',
    PENDING: 'PENDING',
}

export const FILTER_ACTION = {
    COMPLETED_ON: 'COMPLETED_ON',
    COMPLETED_OFF: 'COMPLETED_OFF',
    PENDING_ON: 'PENDING_ON',
    PENDING_OFF: 'PENDING_OFF',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: FILTER_STATE.ALL,
    reducers: {
        changed: (state, action) => {
            switch(state) {
    
                case 'ALL':
                    if(action.payload === FILTER_ACTION.COMPLETED_OFF) {
                        return 'PENDING'
                    }
                    else if(action.payload === FILTER_ACTION.PENDING_OFF) {
                        return 'COMPLETED'
                    }
                    else {
                        return state
                    }
        
                case 'COMPLETED':
                    if(action.payload === FILTER_ACTION.COMPLETED_OFF) {
                        return 'PENDING'
                    }
                    else if(action.payload === FILTER_ACTION.PENDING_ON) {
                        return 'ALL'
                    }
                    else {
                        return state
                    }
        
                case 'PENDING':
                    if(action.payload === FILTER_ACTION.COMPLETED_ON) {
                        return 'ALL'
                    }
                    else if(action.payload === FILTER_ACTION.PENDING_OFF) {
                        return 'COMPLETED'
                    }
                    else {
                        return state
                    }
        
                default:
                    return state
            }
        },
    },
})

export default filterSlice
