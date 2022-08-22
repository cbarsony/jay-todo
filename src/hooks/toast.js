const useToast = () => {
    return {
      info: message => alert(message),
      error: message => alert(message),
    }
  }

export default useToast
