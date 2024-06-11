import React from "react";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";
import HomePageAboutSection from "../Components/HomePageAboutSection";

import { useSelector, useDispatch } from 'react-redux'

const HomePage = () => {
  const count = useSelector((state) => state.hotel)
  const dispatch = useDispatch()
  return (
    <div className="w-full">
      <Carousel />
      <HomePageAboutSection />
      {}
      <Footer />
    </div>
  );
};

export default HomePage;
