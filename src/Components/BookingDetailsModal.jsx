// /components/BookingDetailsModal.js

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BookingDetailsModal = ({ show, booking, handleClose }) => {
  if (!booking) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{booking.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{booking.description}</p>
        {/* Add more booking details here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingDetailsModal;
