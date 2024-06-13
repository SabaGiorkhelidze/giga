import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hotelRoomData } from "../data/HotelRoomsData";
import {
  initializeRooms,
  setSearchQuery,
  applySearch,
  setCurrentPage,
  // bookRoom,
  updateRoomStatus,
} from "../features/Hotel/HotelSlice";
import { createBooking } from "../features/Booking/BookingSlice";
import RoomCard from "../Components/RoomCard";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import Filters from "../Components/Filters";

const RoomsPage = () => {
  const dispatch = useDispatch();

  const { rooms, filteredRooms, currentPage, itemsPerPage, searchQuery } =
    useSelector((state) => state.hotel);

  const totalPages = Math.ceil(rooms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRooms = filteredRooms.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleBookRoom = (room) => {
    // dispatch(bookRoom(room.id));
    dispatch(
      updateRoomStatus({ roomId: room.id, isAvailable: false, isBooked: true })
    );
    console.log(`room ${room.id} is booked see details`, room);
    // dispatch(createBooking(room));
  };
  useEffect(() => {
    dispatch(initializeRooms({ rooms: hotelRoomData }));
  }, [dispatch]);
  useEffect(() => {
    dispatch(applySearch());
  }, [dispatch, searchQuery]);

  return (
    <Container style={{ width: "100%" }}>
      <Row>
        <Filters />
      </Row>
      <Row>
        {currentRooms.map((room) => (
          <Col key={room.id} xs={12} sm={6} md={4} lg={3}>
            <RoomCard
              id={room.id}
              roomTitle={room.title}
              roomInfo={room.info}
              roomImage={room.photo}
              roomRating={room.rating}
              onBookRoom={() => handleBookRoom(room)}
              isBooked={room.isBooked}
            />
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center mt-4">
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </Container>
  );
};

export default RoomsPage;
