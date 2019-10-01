import React, { useEffect, useState } from 'react'
import { axiosWithAuth as axios } from '../utils/axiosConfig'

import OpenTicket from '../components/OpenTicket'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Navbar from '../components/Navbar'

export default function StudentDashboard() {
  const classes = useStyles()
  const [tickets, setTickets] = useState([])
  const user_id = localStorage.getItem('user_id')

  useEffect(() => {
    getMyTickets()
  }, [])

  const getMyTickets = () => {
    axios()
      .get(`users/${user_id}/tickets/`)
      .then(res => {
        setTickets(res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  return (
    <>
      <Navbar createTicket={true} />
      <Container
        component='main'
        maxWidth='lg'
        className={classes.paper}
        style={{ margin: '5rem auto 0' }}
      >
        <Card className={classes.cards}>
          {tickets &&
            tickets.map((ticket, index) => {
              return <OpenTicket key={index} ticket={ticket} />
            })}
        </Card>
      </Container>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    margin: theme.spacing(1, 0),
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
