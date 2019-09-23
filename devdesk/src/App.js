import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Views
import Login from './views/Login'
import Register from './views/Register'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' render={props => <Login {...props} />} />
        <Route path='/register' render={props => <Register {...props} />} />
        <PrivateRoute path='/dashboard' component={PrivateRoute} />
        <Route component={Login} />
      </Switch>
    </div>
  )
}

export default App
