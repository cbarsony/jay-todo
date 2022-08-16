import React from 'react'
import ReactDOM from 'react-dom/client'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import TodoApp from './components/TodoApp'

const initialState = {
  todos: [
    {
      id: '1',
      text: 'Take sunbath',
      isCompleted: false,
    },
    {
      id: '2',
      text: 'Go for a walk',
      isCompleted: true,
    },
  ],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "todos/added":
      return state
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
