import * as S from "./topbar.style";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <S.BarContainer>
      <S.iconButton as={Link} to="/business">
        비즈니스
      </S.iconButton>
      <S.iconButton as={Link} to="/profile">
        프로필
      </S.iconButton>
    </S.BarContainer>
  );
};

export default TopBar;
