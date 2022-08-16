import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import TodoApp from './components/TodoApp'
import store from './stores/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
)
