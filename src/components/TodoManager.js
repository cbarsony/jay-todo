import {connect} from 'react-redux'

function TodoManager({clear, filter, onChangeFilter}) {
    let isCompletedChecked, isPendingChecked

    switch(filter) {
        case 'ALL':
            isCompletedChecked = true
            isPendingChecked = true
            break
        case 'COMPLETED':
            isCompletedChecked = true
            isPendingChecked = false
            break
        case 'PENDING':
            isCompletedChecked = false
            isPendingChecked = true
            break
        default:
            throw new Error(`Unknown filter value: ${filter}`)
    }

    const handleCompletedChange = e => {
        onChangeFilter(e.target.checked ? 'c-on' : 'c-off')
    }

    const handlePendingChange = e => {
        onChangeFilter(e.target.checked ? 'p-on' : 'p-off')
    }

    return (
        <div>
            <div>
                <input
                    id="checkbox-completed"
                    type="checkbox"
                    checked={isCompletedChecked}
                    onChange={handleCompletedChange}
                />
                <label htmlFor="checkbox-completed">Completed</label>
            </div>
            <div>
                <input
                    id="checkbox-pending"
                    type="checkbox"
                    checked={isPendingChecked}
                    onChange={handlePendingChange}
                />
                <label htmlFor="checkbox-pending">Pending</label>
            </div>
            <button onClick={clear}>Clear</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        clear: () => dispatch({
            type: 'todos/clear',
        })
    }
}

export default connect(null, mapDispatchToProps)(TodoManager)
