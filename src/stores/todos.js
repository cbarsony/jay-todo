function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }

const initialState = [
    {
      id: 1,
      text: 'Take sunbath',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Go for a walk',
      isCompleted: true,
    },
  ]

const todos = (state = initialState, action) => {
    switch (action.type) {

      case 'todos/added':
        return [
            ...state,
            {
              id: nextTodoId(state),
              text: action.payload,
              isCompleted: false,
            },
          ]

      case 'todos/toggled':
        return state.map(todo => {
            if(todo.id === action.payload) {
              return {
                ...todo,
                isCompleted: !todo.isCompleted,
              }
            }
            else {
              return todo
            }
          })

      case 'todos/cleared':
        return []

      default:
        return state
    }
  }

export default todos
