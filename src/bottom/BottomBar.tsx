import * as S from "./BottomBar.style";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <S.BarContainer>
      <S.NavButton as={Link} to="/home">
        홈
      </S.NavButton>
      <S.NavButton as={Link} to="/business">
        비즈니스
      </S.NavButton>
      <S.NavButton as={Link} to="/profile">
        프로필
      </S.NavButton>
    </S.BarContainer>
  );
};

export default BottomBar;
