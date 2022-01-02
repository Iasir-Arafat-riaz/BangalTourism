
import "./App.css";

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
