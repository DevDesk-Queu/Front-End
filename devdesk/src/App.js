import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

// Views
import Login from './views/Login'
import Register from './views/Register'
import NewTicket from './components/NewTicket'
import PrivateRoute from './components/PrivateRoute'
import StudentDashboard from './views/StudentDashboard'
import HelperDashboard from './views/HelperDashboard'
import Reset from './components/Reset'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' render={props => <Login {...props} />} />
        <Route path='/register' render={props => <Register {...props} />} />
        <Route path='/reset' render={props => <Reset {...props} />} />
        <Route path='/newticket' render={props => <NewTicket {...props} />} />
        <PrivateRoute
          path='/studentdashboard'
          render={props => <StudentDashboard {...props} />}
        />
        <PrivateRoute
          path='/helperdashboard'
          render={props => <HelperDashboard {...props} />}
        />
        <Route component={Login} />
      </Switch>
    </div>
  )
}

export default App
