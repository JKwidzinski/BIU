import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Services,
  Contact,
  ContactUS,
  ContactPL,
  ContactDE,
  Whoops404
} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/services"
          element={<Services />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/contact/us"
          element={<ContactUS />}
        />
        <Route
          path="/contact/pl"
          element={<ContactPL />}
        />
        <Route
          path="/contact/de"
          element={<ContactDE />}
        />
        <Route 
          path="*" 
          element={<Whoops404 />} 
        />
      </Routes>
    </div>
  );
}

export default App;
