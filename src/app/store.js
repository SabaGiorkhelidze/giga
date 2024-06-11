import { configureStore } from '@reduxjs/toolkit'
import HotelSlice from '../features/Hotel/HotelSlice'
import { useSelector, useDispatch } from 'react-redux'
import { hotelRoomData } from '../data/HotelRoomsData'
import { initializeRooms } from '../features/Hotel/HotelSlice'
const store = configureStore({
  reducer: {
    hotel: HotelSlice
  },
})
export default store;

store.dispatch(initializeRooms({ hotel: hotelRoomData }))
