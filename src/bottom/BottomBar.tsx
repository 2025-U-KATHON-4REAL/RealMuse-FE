import React, { useState } from "react";
import * as S from "./BottomBar.style";
import { Link } from "react-router-dom";

import homeIcon from "../assets/icons/Home.png";
import homeIconActive from "../assets/icons/ActiveHome.png";
import businessIcon from "../assets/icons/Briefcase.png";
import businessIconActive from "../assets/icons/ActiveBriefcase.png";
import profileIcon from "../assets/icons/User.png";
import profileIconActive from "../assets/icons/ActiveUser.png";

const BottomBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <S.BarContainer>
      <S.NavButton
        as={Link}
        to="/home"
        onClick={() => setActiveTab("home")}
        style={{ color: activeTab === "home" ? "#ff2176" : "#b3b5bd" }}
      >
        <img
          src={activeTab === "home" ? homeIconActive : homeIcon}
          style={{ height: "25px", width: "25px" }}
        />
        홈
      </S.NavButton>
      <S.NavButton
        as={Link}
        to="/business"
        onClick={() => setActiveTab("business")}
        style={{ color: activeTab === "business" ? "#ff2176" : "#b3b5bd" }}
      >
        <img
          src={activeTab === "business" ? businessIconActive : businessIcon}
          style={{ height: "25px", width: "25px" }}
        />
        비즈니스
      </S.NavButton>
      <S.NavButton
        as={Link}
        to="/profile"
        onClick={() => setActiveTab("profile")}
        style={{ color: activeTab === "profile" ? "#ff2176" : "#b3b5bd" }}
      >
        <img
          src={activeTab === "profile" ? profileIconActive : profileIcon}
          style={{ height: "25px", width: "25px" }}
        />
        프로필
      </S.NavButton>
    </S.BarContainer>
  );
};

export default BottomBar;
