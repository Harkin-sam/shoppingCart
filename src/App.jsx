import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import "./App.css";
import { StoreProvider } from "./context&reducer/StoreContext";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
