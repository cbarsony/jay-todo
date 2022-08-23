import { useDispatch } from 'react-redux'
import { useDebounce } from '../hooks/debounce'
import queryFilterSlice from '../slices/querySlice'

function QueryFilter() {
    const dispatch = useDispatch()

    const [query, setQuery] = useDebounce('', filterValue => {
        dispatch(queryFilterSlice.actions.changed(filterValue))
    })
  
    return (
        <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Filter todos..."
        />
    )
}

export default QueryFilter
