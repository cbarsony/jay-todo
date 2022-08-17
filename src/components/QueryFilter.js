import { useDebounce } from '../hooks/debounce'
import { useDispatch } from 'react-redux'

function QueryFilter() {
    const dispatch = useDispatch()

    const [query, setQuery] = useDebounce('', filterValue => {
        dispatch({type: 'queryFilter/changed', payload: filterValue})
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
