import React, { useEffect, useState } from 'react'
import { axiosWithAuth as axios } from '../utils/axiosConfig'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'

const useStyles = makeStyles(theme => ({
container: {
    display: 'flex',
    },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontSize: 16,
  },
  card: {
    marginTop: 20,
    minWidth: 345,
  },
  button: {
    margin: theme.spacing(1),
  },

}))

export default function OpenTicket(props) {
  const classes = useStyles()
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    axios()
      .get('/users/1/tickets')
      .then(res => {
        setTickets(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
  }, [])

// Delete ticket
    const deleteTicket = () => {
        axios()
            .delete(`/tickets/${props.match.params.id}`)
            .then(res => { 
            setTickets(res.data)
            console.log(res.data)
        })
        .catch(err => {
          console.log('err', err)
        })
    }

  const randomNum = () => {
    return Math.floor(Math.random() * 1000)
  };

  return (
    <Container>
      {tickets &&
        tickets.map(({ title, description, category }) => (
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item lg={10}></Grid>
            <Card className={classes.card}>
              <CardContent>
                <CardHeader
                  avatar={
                    <Avatar
                      alt="Profile Picture"
                      src={`https://source.unsplash.com/random/?people?sig="${randomNum()}`}
                    />
                  }
                  title={title}
                  subheader={category}
                />

                <Divider variant="inset" component="li" />
                <Typography paragraph>{description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  varient="contained"
                  size="small"
                  color="primary"
                  className={classes.button}
                >
                  Open ticket
                </Button>
                <Button
                  onClick={deleteTicket}
                  varient="contained"
                  size="small"
                  color="secondary"
                  className={classes.button}
                >
                  Close ticket
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Container>
  )
}
