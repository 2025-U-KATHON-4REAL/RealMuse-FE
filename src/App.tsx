import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./home/Home";
import BottomBar from "./bottom/BottomBar";
import Business from "./business/Business";
import Profile from "./profile/Profile";
import Test from "./test/Test";
import SignUp from "./login/SignUp";
import Login from "./login/Login";
import RecommendationsDetail from "./home/desc/RecommendationsDetail";
import RequestsDetail from "./home/desc/RequestsDetail";

function AppWrapper() {
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const location = useLocation();

  const handleTestComplete = () => {
    setIsTestCompleted(true);
  };
  const hideBottomBar = ["/", "/signup"];

  return (
    <>
      {/*스크롤 영역*/}
      <div className="AppContent">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={<Home isTestCompleted={isTestCompleted} />}
          />
          <Route path="/home/:brandId" element={<RecommendationsDetail />} />
          {/*라우팅 수정 필요*/}
          <Route path="/home/request/:brandId" element={<RequestsDetail />} />
          <Route path="/business" element={<Business />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/test"
            element={<Test onTestComplete={handleTestComplete} />}
          />
        </Routes>
      </div>
      {!hideBottomBar.includes(location.pathname) && <BottomBar />}
    </>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <div id="root">
        <div className="App">
          <Router>
            <AppWrapper />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
