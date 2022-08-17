import { useDebounce } from '../hooks/debounce'

function QueryFilter() {
    const [query, setQuery] = useDebounce('', 500)
  
    return <input value={query} onChange={e => setQuery(e.target.value)} />
}

export default QueryFilter
