import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Quotes from "./components/Quotes";
import RandomQuotes from "./components/RandomQuotes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/randomquotes" element={<RandomQuotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
