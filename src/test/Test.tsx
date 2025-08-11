import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestScreen1 from "./testScreen/TestScreen1";
import TestScreen2 from "./testScreen/TestScreen2";
import TestScreen3 from "./testScreen/TestScreen3";
import TestResult from "./testScreen/TestResult";
import TestProgress from "./TestProgress";

interface TestProps {
  onTestComplete: () => void;
}

export interface TestFormData {
  name: string;
  gender: string;
  birth: string;
  profileImageUrl: string;
  interestCategories: string[];
  brandThemes: string[];
  skinType: string;
  skinTone: string;
  makeupStyle: string[];
  sns: string;
  targetGender: string;
  targetAgeGroup: string;
  contentTypes: string[];
  contentTopics: string[];
  contentLength: string;
  brandPreferences: string[];
}

// API 결과 타입 정의
interface MatchingResult {
  summary: string;
  beautyTraits: string[];
  contentTraits: string[];
  customerAppeal: string;
}

const Test: React.FC<TestProps> = ({ onTestComplete }) => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);
  const navigate = useNavigate();

  {
    /*테스트 데이터 관리*/
  }
  const [testFormData, setTestFormData] = useState<TestFormData>({
    name: "",
    gender: "",
    birth: "",
    profileImageUrl: "",
    interestCategories: [],
    brandThemes: [],
    skinType: "",
    skinTone: "",
    makeupStyle: [],
    sns: "",
    targetGender: "",
    targetAgeGroup: "",
    contentTypes: [],
    contentTopics: [],
    contentLength: "",
    brandPreferences: [],
  });

  const [matchingResult, setMatchingResult] = useState<MatchingResult | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleComplete = async () => {
    setLoading(true);
    setError(null);
    try {
      // POST 요청: 사용자 입력 데이터 전송
      const token = localStorage.getItem("accessToken");
      const postResponse = await fetch(
        "https://team4real.r-e.kr/creators/analysis",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify(testFormData),
        }
      );

      if (!postResponse.ok) {
        throw new Error(`POST 요청 실패: ${postResponse.status}`);
      }

      // GET 요청: 결과 받아오기
      const getResponse = await fetch(
        "https://team4real.r-e.kr/creators/analysis",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        }
      );

      if (!getResponse.ok) {
        throw new Error(`GET 요청 실패: ${getResponse.status}`);
      }

      const ResultData: MatchingResult = await getResponse.json();
      setMatchingResult(ResultData);
      setStep(4);
    } catch (err: any) {
      setError(err.message || "에러가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const onResultComplete = () => {
    onTestComplete();
    navigate("/home");
  };

  return (
    <div>
      <TestProgress step={step} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>테스트 결과 생성 중...</p>}

      {step === 1 && (
        <TestScreen1
          onNext={nextStep}
          formData={testFormData}
          setFormData={setTestFormData}
        />
      )}
      {step === 2 && (
        <TestScreen2
          onNext={nextStep}
          formData={testFormData}
          setFormData={setTestFormData}
        />
      )}
      {step === 3 && (
        <TestScreen3
          onNext={handleComplete} // 최종 완료 시 handleComplete 실행
          formData={testFormData}
          setFormData={setTestFormData}
        />
      )}
      {step === 4 && matchingResult && (
        <TestResult result={matchingResult} onComplete={onResultComplete} />
      )}
    </div>
  );
};

export default Test;
