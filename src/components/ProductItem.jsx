import React from 'react'
import { Card, Button } from 'react-bootstrap'
export  function ProductItem() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
    <Card >
<Card.Img variant="top" src="https://images.pexels.com/photos/4356143/pexels-photo-4356143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
<Card.Body>
<Card.Title>Card Title</Card.Title>
<Card.Text>
    
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</Card.Text>
<Button variant="warning">Book now</Button>
</Card.Body>
</Card>

    </div>
  )
}
