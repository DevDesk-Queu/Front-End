import React, {useState} from 'react'

import { axiosWithoutAuth as axios } from '../utils/axiosConfig'

//material UI imports
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'

export default function NewTicket(props) {

    const user_id = localStorage.getItem('user_id')

    const categories = [
      'JS',
      'React',
      'HTML/CSS',
      'Node.js',
      'Other'
    ]

    const classes = useStyles()

    const [formFields, setFormFields] = useState({
      title: '',
      description: '',
      category: '',
      user_id: user_id
    })

    const handleChange = event => {
      setFormFields({
        ...formFields,
        [event.target.name]: event.target.value
      })
    }

    const handleSubmit = event => {

      event.preventDefault()

      axios()
        .post('/tickets', formFields)
        .then(res => props.history.push('/studentdashboard'))
        .catch(err => console.log(err.response))
    }

    return (
        <Container component='main' maxWidth='sm'>
        <CssBaseline />
        <div className={classes.paper}>
            <Typography component='h1' variant='h5'>New Ticket</Typography>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name='title'
                variant='outlined'
                value={formFields.title}
                onChange={e => handleChange(e)}
                required
                fullWidth
                label='Title'
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                name='description'
                variant='outlined'
                value={formFields.description}
                onChange={e => handleChange(e)}
                required
                fullWidth
                multiline
                label='Description'
              />
            </Grid>
            <FormControl
              variant='outlined'
              className={classes.formControl}
              fullWidth
              required
            >
              <InputLabel>Category</InputLabel>
              <Select
                value={formFields.category}
                onChange={e => handleChange(e)}
                name='category'
              >
                <option value='' />
                {categories.map(cat => {
                  let catcap = cat.charAt(0).toUpperCase() + cat.slice(1)
                  return <option key={cat} value={cat}>{catcap}</option>
                })}
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
            Submit
          </Button>
        </form>
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