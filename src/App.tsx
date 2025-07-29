import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./home/Home";
import BottomBar from "./bottom/BottomBar";
import Business from "./business/Business";
import Profile from "./profile/Profile";
import Test from "./test/Test";
import SignUp from "./login/SignUp";
import Login from "./login/Login";

function App() {
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  const handleTestComplete = () => {
    setIsTestCompleted(true);
  };

  return (
    <>
      <GlobalStyle />
      <div id="root">
        <div className="App">
          <Router>
            {/*스크롤 영역*/}
            <div className="AppContent">
              <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<Login />} />
                <Route
                  path="/home"
                  element={<Home isTestCompleted={isTestCompleted} />}
                />
                <Route path="/business" element={<Business />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/test"
                  element={<Test onTestComplete={handleTestComplete} />}
                />
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
