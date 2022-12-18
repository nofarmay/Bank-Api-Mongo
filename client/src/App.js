import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import AddHome from "./Components/AddHome";
import Error from "./Pages/Error";
import Register from "./Components/Register";
// import Login from "./Components/Login";
import Cards from "./Components/Cards";
import Card from "./Components/Card";

function App() {
  const [filter, setFilter] = useState("");
  const [chosenHouse, setChosenHouse] = useState("");
  console.log(chosenHouse);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          exact
          element={<HomePage filter={filter} setFilter={setFilter} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/AddHome" element={<AddHome />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/Card" element={<Card chosenHouse={chosenHouse} />} />
        <Route
          path="/Cards"
          element={<Cards filter={filter} setChosenHouse={setChosenHouse} />}
        />
      </Routes>
    </div>
  );
}
export default App;