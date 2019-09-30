import React, { useEffect, useState } from 'react'
import { axiosWithAuth as axios } from '../utils/axiosConfig'

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { green } from '@material-ui/core/colors/green';

const user_id = localStorage.getItem('user_id')
const ticket_id = localStorage.getItem('ticket_id')

export default function OpenTicket() {
  const classes = useStyles()
  const [tickets, setTickets] = useState([])
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    getAllTickets()
  }, [])

  // ********** To test replace ${user_id} with a user id from DB 1, 2, 3 or 4 ********** 
  const getAllTickets = () => {
    axios()
      .get(`users/1/tickets`)
      .then(res => {
        setTickets(res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
  }

// Delete ticket
    const deleteTicket = () => {
        axios()
            .delete(`/tickets`)
            .then(res => { 
            setTickets(res.data)
            console.log(res.data)
            console.log(res)

        })
        .catch(err => {
          console.log('err', err)
        })
    }

  const randomNum = () => {
    return Math.floor(Math.random() * 1000)
  };

    return (
              <>
            <Navbar />
              {tickets &&
                tickets.map(({ ticket_id, title, description, category, i }) => (

                <Grid item xs={4} style={{ marginTop: '6rem' }}>
                    <Card key={i} className={classes.card}>
                        <CardContent>
                          <CardHeader
                            avatar={
                              <Avatar
                                alt="Profile Picture"
                                src={"https://source.unsplash.com/daily"}
                              />
                            }
                            title={`Subject: ${title}`}
                            subheader={`Category: ${category}`}
                          />
                          <Divider />
                        </CardContent>
                        
                        <CardActions>
                        <Box
                          borderColor="#00e676"
                          border={1}
                          borderRadius={100}
                          >
                        <IconButton              
                          className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                          })}
                          onClick={handleExpandClick}
                        >
                          
                          <ExpandMoreIcon 
                          color="action"
                          />
                        </IconButton>
                          </Box>
                          <Box
                          borderColor="primary.main"
                          border={1}
                          borderRadius={5}
                          >
                          <Button
                            varient="contained"
                            size="small"
                            color="primary"
                            className={classes.button}
                          >
                            Claim ticket
                          </Button>
                          </Box>

                          <Box 
                          borderColor="secondary.main"
                          border={1}
                          borderRadius={5}
                          >
                          <Button
                            onClick={deleteTicket}
                            varient="contained"
                            size="small"
                            color="secondary"
                            className={classes.button}
                          >
                            Close ticket
                          </Button>
                          </Box>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                        
                        <CardContent>
                          <Typography paragraph>Description:</Typography>
                          <Typography paragraph>{description}</Typography>
                          </CardContent>
                      </Collapse>
                      </Card>
                    </Grid>
                ))}
            </>
          );
        
}

const useStyles = makeStyles(theme => ({
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}))

// return (
//   <>
//     <Grid container direction="row" item xs={12} spacing={1} justify="center">
//         <Grid container item xs={12} spacing={3}>
//           <FormRow />
//         </Grid>
//     </Grid>
//   </>
//   )