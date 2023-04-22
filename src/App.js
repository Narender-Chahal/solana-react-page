import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import { Route, Routes } from "react-router-dom";
import Preloder from "./components/Preloder";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
      </Routes>
      <Preloder />
    </>
  );
}

export default App;
