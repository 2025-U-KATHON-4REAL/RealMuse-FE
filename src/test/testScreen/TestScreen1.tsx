import React from "react";
import * as S from "../test.style";

interface TestScreenProps {
  onNext: () => void;
}

const TestScreen1: React.FC<TestScreenProps> = ({ onNext }) => {
  const startYear = 1920;
  const endYear = new Date().getFullYear();

  const years = [];
  for (let y = endYear; y >= startYear; y--) {
    years.push(y);
  }

  return (
    <S.TestScreenContainer>
      <S.TextTitle>기본 특성</S.TextTitle>
      <S.inputBox type="text" placeholder="크리에이터 이름 입력" />
      <S.selectBox>
        <option value="">성별</option>
        <option value="male">남성</option>
        <option value="female">여성</option>
      </S.selectBox>

      <S.selectBox>
        <option value="">나이</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}년생
          </option>
        ))}
      </S.selectBox>

      <S.uploadBox type="file" accept="image/*" />
      <S.nextButton onClick={onNext}>다음</S.nextButton>
    </S.TestScreenContainer>
  );
};

export default TestScreen1;
