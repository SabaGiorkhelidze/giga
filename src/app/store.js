import { configureStore } from '@reduxjs/toolkit'
import HotelSlice from '../features/Hotel/HotelSlice'
import BookingSlice from '../features/Booking/BookingSlice';
const store = configureStore({
  reducer: {
    hotel: HotelSlice,
    booking: BookingSlice,
  },
});

export default store;


