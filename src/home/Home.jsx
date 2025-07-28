import React from "react";
import TopBar from "./top/TopBar";
import BrandBox from "./brandBox/BrandBox";

const Home = () => {
  return (
    <>
      <TopBar />
      <div style={{ padding: "20px", paddingTop: "60px" }}>
        <h1>🏠 홈</h1>
        <p>이곳은 홈입니다.</p>
      </div>
      <BrandBox />
    </>
  );
};

export default Home;
