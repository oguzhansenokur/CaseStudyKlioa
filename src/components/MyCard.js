import React from 'react'
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function MyCard(props) {
  return (
    <div>
      <Card className='border border-0'>
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Integratiens:{props.subtitle}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}
