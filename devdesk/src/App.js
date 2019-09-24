import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Views
import Login from './views/Login'
import Register from './views/Register'
import PrivateRoute from './components/PrivateRoute'
import StudentDashboard from './views/StudentDashboard'


function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' render={props => <Login {...props} />} />
        <Route path='/register' render={props => <Register {...props} />} />
        <PrivateRoute path='/dashboard' component={Register} />
        <Route path='/studentdashboard' render={props => <StudentDashboard {...props} />} />
        <Route component={Login} />
      </Switch>
    </div>
  )
}

export default App
