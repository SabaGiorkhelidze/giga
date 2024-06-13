import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../features/Hotel/HotelSlice'; // Adjust the import path accordingly
import { Form, Button, Row, Col } from 'react-bootstrap';

const Filters = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [type, setType] = useState('');
  const [vip, setVip] = useState('');

  const handleFilterChange = () => {
    dispatch(setFilters({
      rating: rating ? parseInt(rating) : null,
      isAvailable: isAvailable ? (isAvailable === 'true') : null,
      type: type || null,
      vip: vip ? (vip === 'true') : null,
    }));
  };

  return (
    <div className="filter-component p-3">
      <Form>
        <Row>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control as="select" value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="">All</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Availability</Form.Label>
              <Form.Control as="select" value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)}>
                <option value="">All</option>
                <option value="true">Available</option>
                <option value="false">Not Available</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">All</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="triple">Triple</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>VIP</Form.Label>
              <Form.Control as="select" value={vip} onChange={(e) => setVip(e.target.value)}>
                <option value="">All</option>
                <option value="true">VIP</option>
                <option value="false">Not VIP</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" className="mt-2" onClick={handleFilterChange}>
          Apply Filters
        </Button>
      </Form>
    </div>
  );
};

export default Filters;
