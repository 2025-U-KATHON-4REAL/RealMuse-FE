import React, { useState } from "react";
import * as S from "../test.style";

interface TestScreenProps {
  onNext: () => void;
}

const kinds = ["Vlog", "언박싱", "리뷰", "튜토리얼", "챌린지", "수다/토크"];
const tones = ["정보 중심", "유쾌/재미", "감성적", "전문적"];
const times = ["숏폼", "5분 이하", "10분 이상"];
const hopes = ["관여 없음", "가이드라인 제공", "연출 관여", "대본 제공"];

const TestScreen3: React.FC<TestScreenProps> = ({ onNext }) => {
  const [selectedKind, setSelectedKind] = useState<string | null>(null);
  const [selectedTone, setSelectedTone] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedHope, setSelectedHope] = useState<string | null>(null);

  return (
    <S.TestScreenContainer>
      <S.TextTitle>콘텐츠 특성</S.TextTitle>
      <S.subTitle>SNS</S.subTitle>
      <S.inputBox type="text" placeholder="SNS 입력" />
      <S.subTitle>주 시청자</S.subTitle>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <S.selectBox style={{ flex: 1 }}>
          <option value="">성별</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </S.selectBox>
        <S.inputBox type="text" placeholder="연령대 입력" style={{ flex: 2 }} />
      </div>
      <S.subTitle>콘텐츠 종류</S.subTitle>
      <S.ButtonGrid>
        {kinds.map((kind) => (
          <S.CategoryButton
            key={kind}
            selected={selectedKind === kind}
            onClick={() => setSelectedKind(kind)}
          >
            {kind}
          </S.CategoryButton>
        ))}
      </S.ButtonGrid>
      <S.subTitle>콘텐츠 톤</S.subTitle>
      <S.ButtonGrid>
        {tones.map((tone) => (
          <S.CategoryButton
            key={tone}
            selected={selectedTone === tone}
            onClick={() => setSelectedTone(tone)}
          >
            {tone}
          </S.CategoryButton>
        ))}
      </S.ButtonGrid>
      <S.subTitle>콘텐츠 길이</S.subTitle>
      <S.ButtonGrid>
        {times.map((time) => (
          <S.CategoryButton
            key={time}
            selected={selectedTime === time}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </S.CategoryButton>
        ))}
      </S.ButtonGrid>
      <S.subTitle>
        브랜드 <br /> 희망 관여도
      </S.subTitle>
      <S.ButtonGrid>
        {hopes.map((hope) => (
          <S.CategoryButton
            key={hope}
            selected={selectedHope === hope}
            onClick={() => setSelectedHope(hope)}
          >
            {hope}
          </S.CategoryButton>
        ))}
      </S.ButtonGrid>
      <S.nextButton onClick={onNext}>완료</S.nextButton>
    </S.TestScreenContainer>
  );
};

export default TestScreen3;
