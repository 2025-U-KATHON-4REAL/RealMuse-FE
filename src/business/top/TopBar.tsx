import * as S from "./topbar.style";
import { useState } from "react";

interface TopBarProps {
  onSelectButtonType: (type: "CURRENT" | "CHAT") => void;
}

const TopBar: React.FC<TopBarProps> = ({ onSelectButtonType }) => {
  const [selected, setSelected] = useState<"CURRENT" | "CHAT">("CURRENT");

  const handleSelect = (type: "CURRENT" | "CHAT") => {
    setSelected(type);
    onSelectButtonType(type);
  };

  return (
    <S.BarContainer>
      <S.AppLogoImg />
      <S.ButtonGroup>
        <S.Button
          isSelected={selected === "CURRENT"}
          onClick={() => handleSelect("CURRENT")}
        >
          현황
        </S.Button>
        <S.Button
          isSelected={selected === "CHAT"}
          onClick={() => handleSelect("CHAT")}
        >
          채팅
        </S.Button>
      </S.ButtonGroup>
    </S.BarContainer>
  );
};

export default TopBar;
