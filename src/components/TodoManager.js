import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function TodoManager() {
    const filter = useSelector(store => store.filter)
    const dispatch = useDispatch()
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
            isCompletedChecked = true
            isPendingChecked = true
    }

    const handleCompletedChange = useCallback(e => {
        dispatch({ type: e.target.checked ? 'c-on' : 'c-off' })
    }, [dispatch])

    const handlePendingChange = useCallback(e => {
        dispatch({ type: e.target.checked ? 'p-on' : 'p-off' })
    }, [dispatch])

    const handleClearClick = useCallback(() => {
        dispatch({ type: 'todos/cleared' })
    }, [dispatch])

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
            <button onClick={handleClearClick}>Clear</button>
        </div>
    )
}

export default TodoManager
