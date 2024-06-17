import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hotelReducer from "../features/Hotel/HotelSlice";
import bookingReducer from "../features/Booking/BookingSlice";
import languageSlice from "../features/languageSlice/LanguageSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";




const persistConfig = {
  key: "root",
  storage,
  blacklist: ["language"]
};

const persistedBookingReducer = persistReducer(persistConfig, bookingReducer);

const rootReducer = {
  hotel: hotelReducer,
  booking: persistedBookingReducer,
  language: languageSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
