import { useState, useRef } from 'react'

export const useDebounce = (value, callback, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    const timeout = useRef(null)

    const setDebounce = newValue => {
        setDebouncedValue(newValue)
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            callback(newValue)
        }, delay)
    }

    return [debouncedValue, setDebounce]
}
