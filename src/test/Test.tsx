import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestScreen1 from "./testScreen/TestScreen1";
import TestScreen2 from "./testScreen/TestScreen2";
import TestScreen3 from "./testScreen/TestScreen3";
import TestResult from "./testScreen/TestResult";

const Test: React.FC = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);

  const navigate = useNavigate();
  const handleComplete = () => {
    navigate("/");
  };

  return (
    <div>
      <p>{step} / 4</p> {/*진행상태 표시*/}
      {step === 1 && <TestScreen1 onNext={nextStep} />}
      {/*조건 && 컴포넌트 → 조건이 true일 때만 컴포넌트 렌더*/}
      {step === 2 && <TestScreen2 onNext={nextStep} />}
      {step === 3 && <TestScreen3 onNext={nextStep} />}
      {step === 4 && <TestResult onComplete={handleComplete} />}
    </div>
  );
};

export default Test;
