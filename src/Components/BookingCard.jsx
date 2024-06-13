// /components/BookingCard.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BookingCard = ({ booking, onShowDetails }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Body>
        <Card.Title>{booking.title}</Card.Title>
        <Card.Text>
          {booking.description}
        </Card.Text>
        <Button variant="primary" onClick={() => onShowDetails(booking.id)}>
          Show Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookingCard;
