// /pages/BookingPage.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import BookingCard from '../Components/BookingCard';
import BookingDetailsModal from '../Components/BookingDetailsModal';
import { fetchBookingDetails } from '../features/Booking/BookingSlice';

const BookingPage = () => {
  const bookings = useSelector((state) => state.booking.bookings);
  console.log(bookings)
  const bookingDetails = useSelector((state) => state.booking.bookingDetails);
  const [showModal, setShowModal] = useState(false);

  const handleShowDetails = (bookingId) => {
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container>
      <Row>
        {bookings.map((booking) => (
          <Col key={booking.id} md={4}>
            <BookingCard booking={booking} onShowDetails={handleShowDetails} />
          </Col>
        ))}
      </Row>
      <BookingDetailsModal
        show={showModal}
        booking={bookingDetails}
        handleClose={handleClose}
      />
    </Container>
  );
};

export default BookingPage;
