import React from "react";
import { Progress } from "antd";

interface TestProgressProps {
  step: number;
}

const TestProgress: React.FC<TestProgressProps> = ({ step }) => {
  const totalSteps = 3;
  const progressPercent = (step / totalSteps) * 90;

  if (step >= 1 && step <= 3) {
    return (
      <div
        style={{
          margin: "8px 0",
          marginBottom: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Progress
          percent={progressPercent}
          showInfo={false}
          trailColor="#FFE8F1"
          strokeColor="#FF6AA3"
        />
        <p style={{ fontSize: "15px" }}>
          {step} / {totalSteps}
        </p>
      </div>
    );
  }

  return null;
};

export default TestProgress;
