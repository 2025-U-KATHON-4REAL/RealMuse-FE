import * as S from "./topbar.style";
import { useState } from "react";

interface TopBarProps {
  onSelectButtonType: (type: "RECOMMENDATIONS" | "REQUESTS") => void;
}

const TopBar: React.FC<TopBarProps> = ({ onSelectButtonType }) => {
  const [selected, setSelected] = useState<"RECOMMENDATIONS" | "REQUESTS">(
    "RECOMMENDATIONS"
  );

  const handleSelect = (type: "RECOMMENDATIONS" | "REQUESTS") => {
    setSelected(type);
    onSelectButtonType(type);
  };

  return (
    <S.BarContainer>
      <S.AppLogoImg />
      <S.ButtonGroup>
        <S.Button
          isSelected={selected === "RECOMMENDATIONS"}
          onClick={() => handleSelect("RECOMMENDATIONS")}
        >
          매칭
        </S.Button>
        <S.Button
          isSelected={selected === "REQUESTS"}
          onClick={() => handleSelect("REQUESTS")}
        >
          요청
        </S.Button>
      </S.ButtonGroup>
    </S.BarContainer>
  );
};

export default TopBar;
