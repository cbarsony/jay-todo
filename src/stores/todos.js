const todos = (state = [], action) => {
    switch (action.type) {

      case 'todos/loaded':
        return action.payload

      case 'todos/updated':
        return state.map(todo => todo.id === action.payload.id ? action.payload : todo)

      case 'todos/cleared':
        return []

      default:
        return state
    }
  }

export default todos
