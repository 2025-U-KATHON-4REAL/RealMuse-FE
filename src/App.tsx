import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./home/Home";
import BottomBar from "./bottom/BottomBar";
import Business from "./business/Business";
import Profile from "./profile/Profile";
import Test from "./test/Test";

function App() {
  return (
    <>
      <GlobalStyle />
      <div id="root">
        <div className="App">
          <Router>
            {/*스크롤 영역*/}
            <div className="AppContent">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/business" element={<Business />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/test" element={<Test />} />
              </Routes>
            </div>
            <BottomBar />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
