import React from "react";

interface TestScreenProps {
  onNext: () => void;
}

const TestScreen1: React.FC<TestScreenProps> = ({ onNext }) => {
  return (
    <div>
      <h2>테스트 1단계</h2>
      <p>본명, 성별, 나이 같은 기본 정보 입력 (임시로 간단히 텍스트로만)</p>
      {/* 실제로는 입력 폼 넣으면 됨 */}
      <button onClick={onNext}>다음</button>
    </div>
  );
};

export default TestScreen1;
