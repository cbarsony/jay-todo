const filter = (state = 'ALL', action) => {
    switch(state) {

        case 'ALL':
            if(action.type === 'c-off') {
                return 'PENDING'
            }
            else if(action.type === 'p-off') {
                return 'COMPLETED'
            }
            else {
                return state
            }

        case 'COMPLETED':
            if(action.type === 'c-off') {
                return 'PENDING'
            }
            else if(action.type === 'p-on') {
                return 'ALL'
            }
            else {
                return state
            }

        case 'PENDING':
            if(action.type === 'c-on') {
                return 'ALL'
            }
            else if(action.type === 'p-off') {
                return 'COMPLETED'
            }
            else {
                return state
            }

        default:
            return state
    }
}

export default filter
