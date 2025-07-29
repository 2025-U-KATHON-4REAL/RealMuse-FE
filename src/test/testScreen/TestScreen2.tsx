import React from "react";

interface TestScreenProps {
  onNext: () => void;
}

const TestScreen2: React.FC<TestScreenProps> = ({ onNext }) => {
  return (
    <div>
      <h2>테스트 2단계</h2>
      <p>피부타입, 관심 카테고리 등 뷰티 관련 특성 선택</p>
      {/* 예: 체크박스, 라디오 버튼 등 넣으면 됨 */}
      <button onClick={onNext}>다음</button>
    </div>
  );
};

export default TestScreen2;
