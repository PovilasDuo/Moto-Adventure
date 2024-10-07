import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Trip from "./pages/Trip";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateTrips from "./pages/CreateTrips";

function App() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips/:id" element={<Trip />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/trips/create" element={<CreateTrips />}></Route>
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </>
  );
}

export default App;
