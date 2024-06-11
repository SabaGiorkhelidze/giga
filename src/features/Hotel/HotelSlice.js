import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rooms: [] // Using an array to store rooms
}

const HotelSlice = createSlice({
  name: 'HotelRooms',
  initialState,
  reducers: {
    // Initialize multiple rooms
    initializeRooms: (state, action) => {
      state.rooms = action.payload.rooms
    },
    // Update availability of a room
    setRoomAvailability: (state, action) => {
      const { roomId, isAvailable } = action.payload
      const room = state.rooms.find(room => room.id === roomId)
      if (room) {
        room.isAvailable = isAvailable
      }
    },
    // Update room info
    updateRoomInfo: (state, action) => {
      const { roomId, info } = action.payload
      const room = state.rooms.find(room => room.id === roomId)
      if (room) {
        room.info = info
      }
    },
    // Update room photo
    updateRoomPhoto: (state, action) => {
      const { roomId, photo } = action.payload
      const room = state.rooms.find(room => room.id === roomId)
      if (room) {
        room.photo = photo
      }
    },
    // Update room rating
    updateRoomRating: (state, action) => {
      const { roomId, rating } = action.payload
      const room = state.rooms.find(room => room.id === roomId)
      if (room) {
        room.rating = rating
      }
    },
  }
})

// Action creators are generated for each case reducer function
export const { 
  initializeRooms, 
  setRoomAvailability, 
  updateRoomInfo, 
  updateRoomPhoto, 
  updateRoomRating 
} = HotelSlice.actions

export default HotelSlice.reducer
