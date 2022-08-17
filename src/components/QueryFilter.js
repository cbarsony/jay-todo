import { useDebounce } from '../hooks/debounce'

function QueryFilter() {
    const [query, setQuery] = useDebounce('', x => console.log('x', x))
  
    return <input value={query} onChange={e => setQuery(e.target.value)} />
}

export default QueryFilter
