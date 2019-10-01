import React, { useEffect, useState } from 'react'
import { axiosWithAuth as axios } from '../utils/axiosConfig'

import OpenTicket from '../components/OpenTicket'
import Card from '@material-ui/core/Card'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Navbar from '../components/Navbar'

export default function HelperDashboard() {
  const [tickets, setTickets] = useState([])

  // grab id from local storage
  const helper_id = localStorage.getItem('user_id')

  // styles
  const classes = useStyles()

  useEffect(() => {
    getAllTickets()
  }, [])

  const getAllTickets = () => {
    axios()
      .get('/tickets')
      .then(res => {
        setTickets(res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  const getMyTickets = e => {
    axios()
      .get(`/tickets/${helper_id}/tickets`)
      .then(res => {
        setTickets(res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
    // console.log('clicked')
  }

  return (
    <>
      <Navbar allTickets={getAllTickets} myTickets={getMyTickets} />
      <Container
        component='main'
        maxWidth='lg'
        className={classes.paper}
        style={{ margin: '6rem auto 0' }}
      >
        <CssBaseline />
        <Card className={classes.paper}>
          {tickets &&
            tickets.map((ticket, index) => {
              return <OpenTicket key={index} ticket={ticket} />
            })}
        </Card>
      </Container>
    </>
  )
}

// Set style theme for the form components
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    margin: theme.spacing(4, 0),
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    margin: theme.spacing(1, 1),
  },
}))
