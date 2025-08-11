import React, { useState } from "react";
import * as S from "../test.style";
import { TestFormData } from "../Test";

interface TestScreenProps {
  onNext: () => void;
  formData: TestFormData;
  setFormData: React.Dispatch<React.SetStateAction<TestFormData>>;
}

const interests = ["스킨케어", "메이크업", "향수", "바디", "헤어"];
const themes = ["로드샵", "럭셔리", "비건", "천연유래", "클린뷰티"];
const faceTypes = ["건성", "지성", "복합성", "민감성"];
const faceTones = ["~17호", "17~21호", "21~23호", "23~호"];
const makeupStyles = ["내추럴", "글램", "글로우", "매트", "글리터"];

const TestScreen2: React.FC<TestScreenProps> = ({
  onNext,
  formData,
  setFormData,
}) => {
  //const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  //const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  //const [selectedFaceType, setSelectedFaceType] = useState<string | null>(null);
  //const [selectedFaceTone, setSelectedFaceTone] = useState<string | null>(null);
  //const [selectedMakeupStyle, setSelectedMakeupStyle] = useState<string | null>(
  //  null
  //);

  return (
    <S.TestScreenContainer>
      <S.TextTitle>뷰티 특성</S.TextTitle>
      <S.subTitle>관심 카테고리</S.subTitle>
      <S.ButtonGrid>
        {interests.map((interest) => {
          const isSelected = formData.interestCategories.includes(interest);
          return (
            <S.CategoryButton
              key={interest}
              selected={isSelected}
              onClick={() =>
                setFormData((prev) => {
                  if (isSelected) {
                    return {
                      ...prev,
                      interestCategories: prev.interestCategories.filter(
                        (i) => i !== interest
                      ),
                    };
                  } else {
                    return {
                      ...prev,
                      interestCategories: [
                        ...prev.interestCategories,
                        interest,
                      ],
                    };
                  }
                })
              }
            >
              {interest}
            </S.CategoryButton>
          );
        })}
      </S.ButtonGrid>

      <S.subTitle>브랜드 테마</S.subTitle>
      <S.ButtonGrid>
        {themes.map((theme) => {
          const isSelected = formData.brandThemes.includes(theme);
          return (
            <S.CategoryButton
              key={theme}
              selected={isSelected}
              onClick={() =>
                setFormData((prev) => {
                  if (isSelected) {
                    return {
                      ...prev,
                      brandThemes: prev.brandThemes.filter((t) => t !== theme),
                    };
                  } else {
                    return {
                      ...prev,
                      brandThemes: [...prev.brandThemes, theme],
                    };
                  }
                })
              }
            >
              {theme}
            </S.CategoryButton>
          );
        })}
      </S.ButtonGrid>

      <S.subTitle>피부 타입</S.subTitle>
      <S.ButtonGrid>
        {faceTypes.map((faceType) => (
          <S.CategoryButton
            key={faceType}
            selected={formData.skinType === faceType}
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                skinType: faceType,
              }))
            }
          >
            {faceType}
          </S.CategoryButton>
        ))}
      </S.ButtonGrid>

      <S.subTitle>피부 밝기</S.subTitle>
      <S.ButtonGrid>
        {faceTones.map((faceTone) => (
          <S.CategoryButton
            key={faceTone}
            selected={formData.skinTone === faceTone}
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                skinTone: faceTone,
              }))
            }
          >
            {faceTone}
          </S.CategoryButton>
        ))}
      </S.ButtonGrid>

      <S.subTitle>메이크업 스타일</S.subTitle>
      <S.ButtonGrid>
        {makeupStyles.map((makeupStyle) => {
          const isSelected = formData.makeupStyle.includes(makeupStyle);
          return (
            <S.CategoryButton
              key={makeupStyle}
              selected={isSelected}
              onClick={() =>
                setFormData((prev) => {
                  if (isSelected) {
                    return {
                      ...prev,
                      makeupStyle: prev.makeupStyle.filter(
                        (m) => m !== makeupStyle
                      ),
                    };
                  } else {
                    return {
                      ...prev,
                      makeupStyle: [...prev.makeupStyle, makeupStyle],
                    };
                  }
                })
              }
            >
              {makeupStyle}
            </S.CategoryButton>
          );
        })}
      </S.ButtonGrid>

      <S.nextButton onClick={onNext}>다음</S.nextButton>
    </S.TestScreenContainer>
  );
};

export default TestScreen2;
