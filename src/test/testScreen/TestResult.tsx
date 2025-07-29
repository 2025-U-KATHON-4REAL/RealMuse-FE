import React from "react";
import * as S from "../test.style";

interface TestResultProps {
  onComplete: () => void;
}

const TestResult: React.FC<TestResultProps> = ({ onComplete }) => {
  return (
    <S.TestScreenContainer>
      <S.TextTitle>AI 매칭</S.TextTitle>
      <S.CompleteButton onClick={onComplete}>
        매칭결과 보러가기
      </S.CompleteButton>
    </S.TestScreenContainer>
  );
};

export default TestResult;
