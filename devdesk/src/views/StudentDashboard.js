import React, { useEffect, useState } from 'react'
import { axiosWithoutAuth as axios } from '../utils/axiosConfig'

import OpenTicket from '../components/OpenTicket'
import Card from '@material-ui/core/Card'

export default function StudentDashboard() { 
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    axios('/:id/tickets')
    .then(res => setTickets(res.data.results))
    .catch(err => {
      console.log('err', err)
    })
  }, [])

    return (
      <section>
        <Card>
        {tickets.map(ticket => {
          return (
              <OpenTicket
                ticket={ticket} 
                key={ticket.id}
                title={ticket.title}
                description={ticket.description}
                category={ticket.category}
                user_id={ticket.user_id}
                created_at={ticket.created_at}
                updated_at={ticket.updated_at}
                />
            )
          })}
      </Card>
      </section>
      
    )
    }