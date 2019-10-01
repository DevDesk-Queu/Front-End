import React, { useEffect } from 'react'
import { axiosWithAuth as axios } from '../utils/axiosConfig'
import { Link } from 'react-router-dom'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

// Form Components
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { TextField } from 'formik-material-ui'

const Login = ({ history, status }) => {
  // Variable for the styles
  const classes = useStyles()

  useEffect(() => {
    if (status) {
      axios()
        .post('/auth/login', status)
        .then(res => {
          // console.log(res)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user_id', res.data.user.id)
          localStorage.setItem('role', JSON.stringify(res.data.user.role))
          localStorage.setItem('email', JSON.stringify(res.data.user.email))
          localStorage.setItem(
            'fullName',
            JSON.stringify(res.data.user.fullName),
          )
        })
        .then(() => {
          // Handle Logic for the user role
          if (JSON.parse(localStorage.getItem('role')) === 'helper') {
            history.push('/helperdashboard')
          } else {
            history.push('/studentdashboard')
          }
        })
        .catch(err => console.log(err))
    }
  }, [status])

  return (
    <div className={classes.height}>
      <Typography component='h1' variant='h2' className={classes.header}>
        Welcome To The Dev Desk
      </Typography>
      <Container component='main' maxWidth='xs' className={classes.paper}>
        <CssBaseline />
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Log In
        </Typography>

        {/* Start of form */}
        <Form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                variant='outlined'
                component={TextField}
                required
                fullWidth
                label='Email Address'
                name='email'
                type='email'
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant='outlined'
                component={TextField}
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
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
            Log In
          </Button>
          <div className={classes.links}>
            <Link to='/register'>Need to register?</Link>
            <Link to='/reset'>Forgot Password?</Link>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default withFormik({
  mapPropsToValues: ({ email, password }) => {
    return {
      email: email || '',
      password: password || '',
    }
  },

  // Validation
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Please provide your email.'),
    password: Yup.string().required('Please provide your password.'),
  }),

  // handleSubmit
  handleSubmit(values, { setStatus }) {
    // console.log(values)
    setStatus(values)
  },
})(Login)

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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  links: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}))
