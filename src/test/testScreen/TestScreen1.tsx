import React from "react";
import * as S from "../test.style";
import { TestFormData } from "../Test";

interface TestScreenProps {
  onNext: () => void;
  formData: TestFormData;
  setFormData: React.Dispatch<React.SetStateAction<TestFormData>>;
}

const TestScreen1: React.FC<TestScreenProps> = ({
  onNext,
  formData,
  setFormData,
}) => {
  const startYear = 1920;
  const endYear = new Date().getFullYear();

  const years = [];
  for (let y = endYear; y >= startYear; y--) {
    years.push(y);
  }

  return (
    <S.TestScreenContainer>
      <S.TextTitle>기본 특성</S.TextTitle>
      <S.inputBox
        type="text"
        placeholder="크리에이터 이름 입력"
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <S.selectBox
        value={formData.gender}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, gender: e.target.value }))
        }
      >
        <option value="">성별</option>
        <option value="male">남성</option>
        <option value="female">여성</option>
      </S.selectBox>

      <S.selectBox
        value={formData.birth}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, birth: e.target.value }))
        }
      >
        <option value="">나이</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}년생
          </option>
        ))}
      </S.selectBox>

      <S.uploadBox
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            const fileUrl = URL.createObjectURL(e.target.files[0]);
            setFormData((prev) => ({ ...prev, profileImageUrl: fileUrl }));
          }
        }}
      />
      <S.nextButton onClick={onNext}>다음</S.nextButton>
    </S.TestScreenContainer>
  );
};

export default TestScreen1;
