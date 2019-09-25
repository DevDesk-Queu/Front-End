import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Views
import Login from './views/Login'
import Register from './views/Register'
import NewTicket from './components/NewTicket'
import StudentRoute from './components/StudentRoute'
import StudentDashboard from './views/StudentDashboard'
import HelperDashboard from './views/HelperDashboard'

function App() {
  //example props to be passed down
  const user_id = 5
  const categories = [
    'category1',
    'category2',
    'category3',
    'category4',
    'category5',
  ]

  return (
    <div className='App'>
      <Switch>
        <Route path='/login' render={props => <Login {...props} />} />
        <Route path='/register' render={props => <Register {...props} />} />
        <Route
          path='/newticket'
          render={props => (
            <NewTicket {...props} user_id={user_id} categories={categories} />
          )}
        />
        <StudentRoute
          path='/studentdashboard'
          render={props => <StudentDashboard {...props} />}
        />
        <HelperRoute
          path='/helperdashboard'
          render={props => <HelperDashboard {...props} />}
        />
        <Route component={Login} />
      </Switch>
    </div>
  )
}

export default App
