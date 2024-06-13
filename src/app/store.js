// original version
// import { configureStore } from '@reduxjs/toolkit'
// import HotelSlice from '../features/Hotel/HotelSlice'
// import BookingSlice from '../features/Booking/BookingSlice';
// const store = configureStore({
//   reducer: {
//     hotel: HotelSlice,
//     booking: BookingSlice,
//   },
// });

// export default store;

// second version with persistent states
// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hotelReducer from "../features/Hotel/HotelSlice";
import bookingReducer from "../features/Booking/BookingSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = {
  hotel: hotelReducer,
  booking: persistReducer(persistConfig, bookingReducer),
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
