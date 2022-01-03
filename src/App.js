import "./App.css";

import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./components/AboutUs/AboutUs";
import TourPlans from "./components/TourPlans/TourPlans";
import DivisionTourPlan from "./components/Home/DivisionTourPlan/DivisionTourPlan";
import TourLists from "./components/Tours/TourLists/TourLists";
import TourDetails from "./components/Tours/TourDetails/TourDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/About" element={<AboutUs />}></Route>
          <Route
            path="/DivisionTourPlan/:divName/:id"
            element={<TourLists />}
          ></Route>
          <Route
            path="/DivisionTourPlan/:divName/:id/tour-details/:tourId"
            element={<TourDetails />}
          ></Route>

          <Route path="/TourPlans" element={<TourPlans />}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
