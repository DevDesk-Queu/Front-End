import React from 'react'
import { Link } from 'react-router-dom'

import Img from '../assets/Lambda-removebg.png'

const Navbar = props => {
  const logout = () => {
    localStorage.removeItem('token')
  }

  return (
    <nav style={navStyles}>
      <div style={ImgDiv}>
        <img src={Img} alt='Dev Desk' style={imgStyles} />
        <h1 style={{ color: 'white' }}>DEV DESK</h1>
      </div>
      <div>
        {props.createTicket && (
          <Link style={linkStyles} to='/newTicket'>
            New Ticket
          </Link>
        )}
        {props.allTickets && (
          <Link onClick={e => props.allTickets(e)} style={linkStyles} to='#'>
            All Tickets
          </Link>
        )}
        {props.myTickets && (
          <Link onClick={e => props.myTickets(e)} style={linkStyles} to='#'>
            My Tickets
          </Link>
        )}
        <Link onClick={() => logout()} style={linkStyles} to='/'>
          Logout
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

const navStyles = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#14121F',
  padding: '.5rem 1rem',
  position: 'fixed',
  top: '0',
  zIndex: '1',
}

const imgStyles = {
  width: '40px',
  height: '40px',
}

const ImgDiv = {
  display: 'flex',
  alignItems: 'center',
}

const linkStyles = {
  color: 'white',
  padding: '8px 14px',
  background: '#bb1333',
  textDecoration: 'none',
  borderRadius: '5px',
  margin: '0 5px',
}
