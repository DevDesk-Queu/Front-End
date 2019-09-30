import React, { useEffect, useState } from 'react'
import { axiosWithAuth as axios } from '../utils/axiosConfig'

import OpenTicket from '../components/OpenTicket'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'

export default function StudentDashboard() {
  const classes = useStyles()
  const [tickets, setTickets] = useState([])
  const user_id = localStorage.getItem('user_id')

  console.log(localStorage)

  useEffect(() => {
    getAllTickets()
  }, [])

 const getAllTickets = () => {
    axios()
      .get(`users/1/tickets/`)
      .then(res => {
        setTickets(res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
  }
   {/* axios()
      .get(`/tickets/${user_id}/tickets`)
      .then(res => {
        setTickets(res.data)
      })
      .catch(err => {
        console.log('err', err)
      }) */}
  

  return (
    <Container component='main' maxWidth='lg' className={classes.paper}>
      <Link to='/newticket' style={{ textDecoration: 'none' }}>
      <Button
        variant='contained'
        color='secondary'
        className={classes.buttons}
      >
        Create Ticket
      </Button>
      </Link>

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
              />
            )
          })}
      </Card>
    </Container>
  )
}

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
    margin: theme.spacing(2, 1),
  },
}))
