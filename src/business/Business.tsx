import React, { useState } from "react";
import TopBar from "./top/TopBar";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Tabs = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Tab = styled.div<{ active?: boolean }>`
  padding: 8px 16px;
  border-bottom: 3px solid
    ${({ active }) => (active ? "#ff2176" : "transparent")};
  color: ${({ active }) => (active ? "#ff2176" : "#555")};
  cursor: pointer;
  user-select: none;
`;

const WeekCalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const DayBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 13%;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const DateLabel = styled.div`
  margin-bottom: 8px;
  color: #666;
  font-weight: 400;
  font-size: 12px;
`;

const tasksSample: { [key: string]: string[] } = {
  "2025-07-28": ["회의 10시", "서류 제출"],
  "2025-07-30": ["작업 마감"],
};

const getWeekDates = (baseDate: Date) => {
  const dates: Date[] = [];
  const day = baseDate.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  const monday = new Date(baseDate);
  monday.setDate(monday.getDate() + diff);

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    dates.push(d);
  }
  return dates;
};

interface WeekCalendarProps {
  baseDate?: Date;
  tasks?: { [key: string]: string[] };
}

const WeekCalendar: React.FC<WeekCalendarProps> = ({
  baseDate = new Date(),
  tasks = {},
}) => {
  const weekDates = getWeekDates(baseDate);

  return (
    <WeekCalendarContainer>
      {weekDates.map((date) => {
        const dateStr = date.toISOString().slice(0, 10); // yyyy-mm-dd
        const dayName = date.toLocaleDateString("ko-KR", { weekday: "short" });
        const dayNum = date.getDate();

        return (
          <DayBox key={dateStr}>
            <DateLabel>{dayName}</DateLabel>
            <div>{dayNum}</div>
            <div style={{ marginTop: 8, fontSize: 12, fontWeight: "400" }}>
              {(tasks[dateStr] || []).map((task, idx) => (
                <div key={idx} style={{ marginTop: 4 }}>
                  • {task}
                </div>
              ))}
            </div>
          </DayBox>
        );
      })}
    </WeekCalendarContainer>
  );
};

const Business = () => {
  const [activeTab, setActiveTab] = useState<"CURRENT" | "CHAT">("CURRENT");

  return (
    <>
      <TopBar onSelectButtonType={(type) => setActiveTab(type)} />
      <Container>
        <Tabs>
          <Tab
            active={activeTab === "CURRENT"}
            onClick={() => setActiveTab("CURRENT")}
          >
            CURRENT
          </Tab>
          <Tab
            active={activeTab === "CHAT"}
            onClick={() => setActiveTab("CHAT")}
          >
            CHAT
          </Tab>
        </Tabs>

        {activeTab === "CURRENT" && (
          <>
            <h1
              style={{
                fontSize: "24px",
                marginTop: "30px",
              }}
            >
              진행 중인 협업
            </h1>
            <p>현재 계약 현황을 확인할 수 있습니다.</p>

            <WeekCalendar baseDate={new Date()} tasks={tasksSample} />
          </>
        )}

        {activeTab === "CHAT" && (
          <div>
            <h1>채팅</h1>
            <p>비즈니스 관련 대화를 나누는 공간입니다.</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default Business;
