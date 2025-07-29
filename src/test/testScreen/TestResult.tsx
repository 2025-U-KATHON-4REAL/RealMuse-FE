import React from "react";
import * as S from "../test.style";

interface TestResultProps {
  onComplete: () => void;
}

const TestResult: React.FC<TestResultProps> = ({ onComplete }) => {
  return (
    <div>
      <h2>테스트 완료</h2>
      <p>AI 매칭 결과가 여기에 표시됩니다.</p>
      <S.CompleteButton onClick={onComplete}>홈으로 돌아가기</S.CompleteButton>
    </div>
  );
};

export default TestResult;
