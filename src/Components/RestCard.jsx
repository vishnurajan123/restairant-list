import React from 'react'
import Card from 'react-bootstrap/Card';

function RestCard({resturent}) {
  return (
    <Card style={{width:"18rem"}}>
    <Card.Img style={{height:"250px"}} className='rounded p-5' variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default RestCard