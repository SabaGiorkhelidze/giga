// /features/Booking/BookingSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  bookingDetails: null,
  bookingStatus: "idle",
  error: null,
};

const BookingSlice = createSlice({
  name: "Booking",
  initialState,
  reducers: {
    createBooking: (state, action) => {
        state.bookings = [...state.bookings, action.payload];
    },
    updateBooking: (state, action) => {
      const { bookingId, newDetails } = action.payload;
      const bookingIndex = state.bookings.findIndex(
        (booking) => booking.id === bookingId
      );
      if (bookingIndex !== -1) {
        state.bookings[bookingIndex] = { ...state.bookings[bookingIndex], ...newDetails };
      }
    },
    cancelBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload.bookingId
      );
    },
    fetchBookingDetails: (state, action) => {
      state.bookingDetails = state.bookings.find(
        (booking) => booking.id === action.payload.bookingId
      );
    },
    setBookingStatus: (state, action) => {
      state.bookingStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  createBooking,
  updateBooking,
  cancelBooking,
  fetchBookingDetails,
  setBookingStatus,
  setError,
} = BookingSlice.actions;

export default BookingSlice.reducer;
