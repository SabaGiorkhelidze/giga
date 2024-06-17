import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomDetails } from '../features/Hotel/HotelSlice';

const RoomDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedRoom = useSelector((state) => state.hotel.selectedRoom);

  useEffect(() => {
    dispatch(fetchRoomDetails(id));
  }, [dispatch, id]);

  if (!selectedRoom) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
  }

  if (selectedRoom === null) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>No room details found</div>;
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', margin: '0 auto', maxWidth: '900px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ margin: '0' }}>{selectedRoom.title}</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ backgroundColor: '#2ecc71', color: '#fff', padding: '5px 10px', borderRadius: '5px' }}>
            Rating: {selectedRoom.rating}
          </div>
          {selectedRoom.isAvailable ? (
            <div style={{ backgroundColor: '#3498db', color: '#fff', padding: '5px 10px', borderRadius: '5px' }}>
              Available
            </div>
          ) : (
            <div style={{ backgroundColor: '#e74c3c', color: '#fff', padding: '5px 10px', borderRadius: '5px' }}>
              Not Available
            </div>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        <div style={{ width: '60%', padding: '10px' }}>
          <img src={selectedRoom.photo} alt={selectedRoom.title} style={{ width: '100%', height: 'auto' }} />
          <div style={{ marginTop: '10px' }}>
            <p>{selectedRoom.info}</p>
            <p>{selectedRoom.detailInfo}</p>
          </div>
        </div>
        <div style={{ width: '40%', padding: '10px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <strong>Type:</strong> {selectedRoom.type}
            </div>
            <div>
              <strong>VIP:</strong> {selectedRoom.vip ? 'Yes' : 'No'}
            </div>
            <div>
              <strong>Booked:</strong> {selectedRoom.isBooked ? 'Yes' : 'No'}
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
            {selectedRoom.images.map((image, index) => (
              <div key={index} style={{ width: '32%', padding: '5px' }}>
                <img src={image} alt={`Room Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
