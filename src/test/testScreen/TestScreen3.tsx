import React from "react";

interface TestScreenProps {
  onNext: () => void;
}

const TestScreen3: React.FC<TestScreenProps> = ({ onNext }) => {
  return (
    <div>
      <h2>테스트 3단계</h2>
      <p>가장 많이 사용하는 SNS, 계정 아이디 입력</p>
      {/* 입력 폼 등으로 구현 */}
      <button onClick={onNext}>완료</button>
    </div>
  );
};

export default TestScreen3;
