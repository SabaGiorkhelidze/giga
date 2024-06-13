import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SignInPage from "../Pages/SignInPage";
import RoomsPage from "../Pages/RoomsPage";
import RoomDetailsPage from "../Pages/RoomDetailsPage";
import BookingPage from "../Pages/BookingPage";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/room/:id" element={<RoomDetailsPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
};

export default Router;
