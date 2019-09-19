import React, { useState } from 'react'
import axios from 'axios'

// Form Components
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const Register = () => {
  // Variable for the styles
  const classes = useStyles()

  // Hook for the form
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    role: '',
  })

  // handleChange to set state
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  // handleSubmit to POST user
  const handleSubmit = e => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Register
        </Typography>

        {/* Start of form */}
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name='fullName'
                variant='outlined'
                value={values.fullName}
                onChange={e => handleChange(e)}
                required
                fullWidth
                label='Full Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                value={values.email}
                onChange={e => handleChange(e)}
                required
                fullWidth
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                value={values.password}
                onChange={e => handleChange(e)}
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                autoComplete='current-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Register

// Set style theme for the form components
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
