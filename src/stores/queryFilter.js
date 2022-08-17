const queryFilter = (state = '', action) => {
    switch(action.type) {
        
        case 'queryFilter/changed':
            return action.payload
            
        default:
            return state
    }
}

export default queryFilter
