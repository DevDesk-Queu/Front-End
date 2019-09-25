import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const StudentRoute = ({ render: Render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token')) {
          return <Render />
        } else {
          return <Redirect to='/login' />
        }
      }}
    />
  )
}

export default StudentRoute
