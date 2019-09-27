import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'

// Views
import Login from './views/Login'
import Register from './views/Register'
import NewTicket from './components/NewTicket'
import PrivateRoute from './components/PrivateRoute'
import StudentDashboard from './views/StudentDashboard'
import HelperDashboard from './views/HelperDashboard'
import Reset from './components/Reset'

function App() {
  const [navBarOpen, setNavBarOpen] = useState(false)

  const handleNavbar = () => {
    setNavBarOpen(!navBarOpen)
  }

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
    <>
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar} />
      <div className='App' style={{ marginTop: '120px' }}>
        <Switch>
          <Route path='/login' render={props => <Login {...props} />} />
          <Route path='/register' render={props => <Register {...props} />} />
          <Route path='/reset' render={props => <Reset {...props} />} />
          <Route
            path='/newticket'
            render={props => (
              <NewTicket {...props} user_id={user_id} categories={categories} />
            )}
          />
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
    </>
  )
}

export default App
