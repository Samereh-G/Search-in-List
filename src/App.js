import React from "react";
import "./App.css";
import MainRouter from "./routes/MainRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
