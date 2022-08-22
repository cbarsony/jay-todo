import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TodoApp from './components/TodoApp'
import store from './stores/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <TodoApp />
        </Route>
        <Route path="/login">
          <div>login...</div>
        </Route>
      </Switch>
    </Router>
  </Provider>
)
