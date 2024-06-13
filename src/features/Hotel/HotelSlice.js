import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  filteredRooms: [],
  currentPage: 1,
  itemsPerPage: 12,

  filters: {
    rating: null,
    isAvailable: null,
    type: null,
    vip: null,
  },
  searchQuery: "",
};

const HotelSlice = createSlice({
  name: "HotelRooms",
  initialState,
  reducers: {
    initializeRooms: (state, action) => {
      state.rooms = action.payload.rooms;
      state.filteredRooms = action.payload.rooms;
    },
    // setRoomAvailability: (state, action) => {
    //   const { roomId, isAvailable } = action.payload;
    //   const room = state.rooms.find((room) => room.id === roomId);
    //   if (room) {
    //     room.isAvailable = isAvailable;
    //   }
    // },
    updateRoomStatus: (state, action) => {
      const { roomId, isAvailable, isBooked } = action.payload;
      const roomIndex = state.rooms.findIndex((room) => room.id === roomId);

      if (roomIndex !== -1) {
        state.rooms[roomIndex] = {
          ...state.rooms[roomIndex],
          isAvailable:
            isAvailable !== undefined
              ? isAvailable
              : state.rooms[roomIndex].isAvailable,
          isBooked:
            isBooked !== undefined ? isBooked : state.rooms[roomIndex].isBooked,
        };
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
      state.filteredRooms = state.rooms.filter((room) => {
        return (
          (state.filters.rating
            ? room.rating === state.filters.rating
            : true) &&
          (state.filters.isAvailable !== null
            ? room.isAvailable === state.filters.isAvailable
            : true) &&
          (state.filters.type ? room.type === state.filters.type : true) &&
          (state.filters.vip !== null ? room.vip === state.filters.vip : true)
        );
      });
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    applySearch: (state) => {
      if (state.searchQuery.trim() === "") {
        state.filteredRooms = state.rooms;
      } else {
        state.filteredRooms = state.rooms.filter((room) =>
          room.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
    },
    bookRoom: (state, action) => {
      const roomIndex = state.rooms.findIndex(
        (room) => room.id === action.payload
      );
      if (roomIndex !== -1) {
        state.rooms[roomIndex].isBooked = true;
      }
    },
  },
});

export const {
  initializeRooms,
  rooms,
  updateRoomStatus,
  setCurrentPage,
  setItemsPerPage,
  setFilters,
  setSearchQuery,
  applySearch,
  bookRoom,
} = HotelSlice.actions;

export default HotelSlice.reducer;

// Update room info
// updateRoomInfo: (state, action) => {
//   const { roomId, info } = action.payload
//   const room = state.rooms.find(room => room.id === roomId)
//   if (room) {
//     room.info = info
//   }
// },
// Update room photo
// updateRoomPhoto: (state, action) => {
//   const { roomId, photo } = action.payload
//   const room = state.rooms.find(room => room.id === roomId)
//   if (room) {
//     room.photo = photo
//   }
// },
// Update room rating
// updateRoomRating: (state, action) => {
//   const { roomId, rating } = action.payload
//   const room = state.rooms.find(room => room.id === roomId)
//   if (room) {
//     room.rating = rating
//   }
// },
