import React, { useState } from "react";
import TopBar from "./top/TopBar";
import BrandList from "./brandList/BrandList";
import { useNavigate } from "react-router-dom";
import * as S from "./home.style";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isTestCompleted, setIsTestCompleted] = useState<boolean>(false);

  const handleTestStart = (): void => {
    navigate("/test");
    setIsTestCompleted(true);
  };

  return (
    <>
      <TopBar />
      <div style={{ padding: "20px", paddingTop: "60px" }}>
        <h1>🏠 홈</h1>
        <p>이곳은 홈입니다.</p>
      </div>

      {/*테스트 시작 전: 매칭률 검사 버튼 / 진행 중: Test 화면 / 완료: BrandBox*/}
      {isTestCompleted ? (
        <BrandList />
      ) : (
        <S.TestStartContainer>
          <p style={{ textAlign: "center" }}>
            아직 매칭된 기업이 없어요 <br /> 매칭 검사를 먼저 진행해주세요
          </p>
          <button onClick={handleTestStart}>매칭률 검사 버튼</button>
        </S.TestStartContainer>
      )}
    </>
  );
};

export default Home;
