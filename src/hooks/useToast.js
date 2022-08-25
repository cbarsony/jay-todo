import { useMemo } from 'react'

const useToast = () => {
  return useMemo(() => ({
    info: message => alert(message),
    error: message => alert(message),
  }), [])
}

export default useToast
