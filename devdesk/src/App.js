import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Views
import Login from './views/Login'
import Register from './views/Register'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' render={props => <Login {...props} />} />
        <Route path='/register' render={props => <Register {...props} />} />
      </Switch>
    </div>
  )
}

export default App
