import React from "react";
import * as S from "../test.style";

interface TestResultProps {
  result: {
    summary: string;
    beautyTraits: string[];
    contentTraits: string[];
    customerAppeal: string;
  };
  onComplete: () => void;
}

const TestResult: React.FC<TestResultProps> = ({ result, onComplete }) => {
  return (
    <S.TestScreenContainer>
      <S.TextTitle>AI 매칭 결과</S.TextTitle>

      <div>
        <h3>요약</h3>
        <p>{result.summary}</p>
      </div>

      <div>
        <h3>뷰티 특성</h3>
        <ul>
          {result.beautyTraits.map((trait, idx) => (
            <li key={idx}>{trait}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>콘텐츠 특성</h3>
        <ul>
          {result.contentTraits.map((trait, idx) => (
            <li key={idx}>{trait}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>고객 매력 포인트</h3>
        <p>{result.customerAppeal}</p>
      </div>

      <S.CompleteButton onClick={onComplete}>
        매칭결과 보러가기
      </S.CompleteButton>
    </S.TestScreenContainer>
  );
};

export default TestResult;
