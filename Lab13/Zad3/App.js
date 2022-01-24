import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Add,
  Sub,
  Mul,
  Div,
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
          path="/add/:a/:b" 
          element={<Add />} 
        />
        <Route 
          path="/sub/:a/:b" 
          element={<Sub />} 
        />
        <Route 
          path="/mul/:a/:b" 
          element={<Mul />} 
        />
        <Route 
          path="/div/:a/:b" 
          element={<Div />} 
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

