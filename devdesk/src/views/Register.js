import React, { useState, useEffect, useRef } from 'react'
import { axiosWithoutAuth as axios } from '../utils/axiosConfig'
import { Link } from 'react-router-dom'

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
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const Register = props => {
  // console.log(props)

  // Variable for the styles
  const classes = useStyles()

  // label items to test
  const inputLabel = useRef(null)
  const [labelWidth, setLabelWidth] = useState(0)
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

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
    // console.log(values)
    axios()
      .post('/auth/register', values)
      .then(res => {
        props.history.push('/login')
      })
      .catch(err => console.log(err.response))
  }

  return (
    <div className={classes.height}>
      <Typography component='h1' variant='h2' className={classes.header}>
        Welcome To The Dev Desk
      </Typography>
      <Container component='main' maxWidth='xs' className={classes.paper}>
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
                  type='email'
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
                />
              </Grid>
              <FormControl
                variant='outlined'
                className={classes.formControl}
                fullWidth
                required
              >
                <InputLabel ref={inputLabel}>Role</InputLabel>
                <Select
                  value={values.role}
                  onChange={e => handleChange(e)}
                  name='role'
                  labelWidth={labelWidth}
                >
                  <MenuItem value='' />
                  <MenuItem value='user'>User</MenuItem>
                  <MenuItem value='helper'>Helper</MenuItem>
                </Select>
              </FormControl>
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
            <Link to='/'>Already registered? Log In!</Link>
          </form>
        </div>
      </Container>
    </div>
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
  height: {
    height: '100vh',
  },
  header: {
    color: 'white',
    margin: '0 auto 5rem',
    textAlign: 'center',
  },
  paper: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(8, 2),
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
