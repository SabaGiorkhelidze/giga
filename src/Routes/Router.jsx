import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SignInPage from "../Pages/SignInPage";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />

      </Routes>
    </>
  );
};

export default Router;
