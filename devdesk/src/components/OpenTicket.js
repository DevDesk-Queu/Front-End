import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'

export default function OpenTicket({ ticket }) {
    console.log(ticket);
  return (           
               <p>Subject: {ticket.title}</p>
  )
}
