import React, { useState } from "react";
import * as S from "../test.style";
import { TestFormData } from "../Test";

interface TestScreenProps {
  onNext: () => void;
  formData: TestFormData;
  setFormData: React.Dispatch<React.SetStateAction<TestFormData>>;
}

const kinds = ["Vlog", "언박싱", "리뷰", "튜토리얼", "챌린지", "수다/토크"];
const tones = ["정보 중심", "유쾌/재미", "감성적", "전문적"];
const times = ["숏폼", "5분 이하", "10분 이상"];
const hopes = ["관여 없음", "가이드라인 제공", "연출 관여", "대본 제공"];

const TestScreen3: React.FC<TestScreenProps> = ({
  onNext,
  formData,
  setFormData,
}) => {
  return (
    <S.TestScreenContainer>
      <S.TextTitle>콘텐츠 특성</S.TextTitle>
      <S.subTitle>SNS</S.subTitle>
      <S.inputBox
        type="text"
        placeholder="SNS 입력"
        value={formData.sns}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, sns: e.target.value }))
        }
      />
      <S.subTitle>주 시청자</S.subTitle>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <S.selectBox
          style={{ flex: 1 }}
          value={formData.targetGender}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, targetGender: e.target.value }))
          }
        >
          <option value="">성별</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </S.selectBox>
        <S.inputBox
          type="text"
          placeholder="연령대 입력"
          style={{ flex: 2 }}
          value={formData.targetAgeGroup}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, targetAgeGroup: e.target.value }))
          }
        />
      </div>
      <S.subTitle>콘텐츠 종류</S.subTitle>
      <S.ButtonGrid>
        {kinds.map((kind) => {
          const isSelected = formData.contentTypes.includes(kind);
          return (
            <S.CategoryButton
              key={kind}
              selected={isSelected}
              onClick={() =>
                setFormData((prev) => {
                  if (isSelected) {
                    return {
                      ...prev,
                      contentTypes: prev.contentTypes.filter((c) => c !== kind),
                    };
                  } else {
                    return {
                      ...prev,
                      contentTypes: [...prev.contentTypes, kind],
                    };
                  }
                })
              }
            >
              {kind}
            </S.CategoryButton>
          );
        })}
      </S.ButtonGrid>
      <S.subTitle>콘텐츠 톤</S.subTitle>
      <S.ButtonGrid>
        {tones.map((tone) => (
          <S.CategoryButton
            key={tone}
            selected={formData.contentTopics.includes(tone)}
            onClick={() =>
              setFormData((prev) => {
                const exists = prev.contentTopics.includes(tone);
                if (exists) {
                  return {
                    ...prev,
                    contentTopics: prev.contentTopics.filter((t) => t !== tone),
                  };
                } else {
                  return {
                    ...prev,
                    contentTopics: [...prev.contentTopics, tone],
                  };
                }
              })
            }
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
            selected={formData.contentLength === time}
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                contentLength: time,
              }))
            }
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
            selected={formData.brandPreferences.includes(hope)}
            onClick={() =>
              setFormData((prev) => {
                const exists = prev.brandPreferences.includes(hope);
                if (exists) {
                  return {
                    ...prev,
                    brandPreferences: prev.brandPreferences.filter(
                      (b) => b !== hope
                    ),
                  };
                } else {
                  return {
                    ...prev,
                    brandPreferences: [...prev.brandPreferences, hope],
                  };
                }
              })
            }
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
