import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./home/Home";
import BottomBar from "./bottom/BottomBar";
import Business from "./business/Business";
import Profile from "./profile/Profile";

function App() {
  return (
    <>
      <GlobalStyle />
      <div id="root">
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/business" element={<Business />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <BottomBar />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
