import React from 'react'

import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const StudentDashboard = () => {
  return (
    <Container maxWidth="xs">
        <Button 
            type='submit'
            size='small'
            variant='contained'
            color='secondary'
            >
                Create Ticket
                </Button>
      <Card>
          <CardContent>
            <Typography>
                <h1>Hello from Student Dashboard!</h1>
            </Typography>
          </CardContent>
      </Card>
    </Container>
  )
}

export default StudentDashboard
