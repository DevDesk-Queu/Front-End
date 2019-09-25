import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const HelperRoute = ({ render: Render, ...rest}) => {
  return (
    <Route
      {...rest}
      render={}
    />
  )
}

export default HelperRoute
