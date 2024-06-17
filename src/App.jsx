import './App.css'
import Router from './Routes/Router'
import NavbarComponent from './Components/Navbar'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initializeRooms } from './features/Hotel/HotelSlice';
import { hotelRoomData } from './data/HotelRoomsData';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeRooms({ rooms: hotelRoomData }));
  }, [dispatch]);
  return (
    <div>
      {/* <h1>hello</h1> */}
      <NavbarComponent />
      <Router />
    </div>
  )
}

export default App
