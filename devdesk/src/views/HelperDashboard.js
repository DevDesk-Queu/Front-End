import React, { useEffect, useState } from 'react'
import { axiosWithAuth as axios } from '../utils/axiosConfig'

import OpenTicket from '../components/OpenTicket'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

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
    // axios()
    //   .get(`/users/${}/tickets`)
    //   .then(res => {
    //     setTickets(res.data)
    //   })
    //   .catch(err => {
    //     console.log('err', err)
    //   })
    console.log('clicked')
  }

  return (
    <Container component='main' maxWidth='xl' className={classes.paper}>
      <CssBaseline />
      <Button
        onClick={e => getAllTickets(e)}
        variant='contained'
        color='secondary'
        className={classes.buttons}
      >
        All Tickets
      </Button>
      <Button
        onClick={e => getMyTickets(e)}
        variant='contained'
        color='secondary'
        className={classes.buttons}
      >
        My Tickets
      </Button>
      <Card className={classes.paper}>
        {tickets &&
          tickets.map(ticket => {
            return (
              <OpenTicket
                ticket={ticket}
                key={ticket.id}
                title={ticket.title}
                description={ticket.description}
                category={ticket.category}
                user_id={ticket.user_id}
                created_at={ticket.created_at}
                updated_at={ticket.updated_at}
              />
            )
          })}
      </Card>
    </Container>
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
    margin: theme.spacing(4, 2),
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    marginLeft: theme.spacing(2),
  },
}))
