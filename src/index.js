import React from 'react'
import ReactDOM from 'react-dom/client'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import TodoApp from './components/TodoApp'

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

const initialState = {
  todos: [
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
  ],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "todos/added":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            isCompleted: false,
          },
        ],
      }
    default:
      return state
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={createStore(reducer)}>
    <TodoApp />
  </Provider>
)
