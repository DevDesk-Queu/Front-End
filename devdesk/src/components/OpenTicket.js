import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'

export default function OpenTicket({ ticket }) {
  return (
    <Card>
      <CardContent>
        <CardHeader>Subject: {ticket.title}</CardHeader>
      </CardContent>
    </Card>
  )
}
