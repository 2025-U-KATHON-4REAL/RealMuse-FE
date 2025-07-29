import React, { useState } from "react";
import TopBar from "./top/TopBar";
import BrandList from "./brandList/BrandList";
import { useNavigate } from "react-router-dom";
import * as S from "./home.style";

interface HomeProps {
  isTestCompleted: boolean;
}

const Home: React.FC<HomeProps> = ({ isTestCompleted }) => {
  const [topBarButtonType, setTopBarButtonType] = useState<
    "RECOMMENDATIONS" | "REQUESTS"
  >("RECOMMENDATIONS");

  const navigate = useNavigate();

  const goToTest = (): void => {
    navigate("/test");
  };

  return (
    <>
      <TopBar onSelectButtonType={setTopBarButtonType} />
      {isTestCompleted ? (
        <BrandList topBarButtonType={topBarButtonType} />
      ) : (
        <S.TestStartContainer>
          <S.HomeTestImg />
          <S.TestDesc>
            아직 매칭된 기업이 없어요 <br /> 매칭 검사를 먼저 진행해주세요
          </S.TestDesc>
          <S.TestStartButton onClick={goToTest}>매칭률 검사</S.TestStartButton>
        </S.TestStartContainer>
      )}
    </>
  );
};

export default Home;
