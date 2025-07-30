import styled from "styled-components";
import AppLogo from "../../assets/AppLogo.png";

export const BarContainer = styled.div`
  position: absolute; /*부모를 기준으로 상단에 고정*/
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #fff7fa;
  display: flex; /*내부 아이템 가로 정렬*/
  justify-content: space-between;
  align-items: end;
`;

export const AppLogoImg = styled.div`
  background-image: url(${AppLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 150px;
  height: 80px;
  margin-left: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 10px;
`;

interface ButtonProps {
  isSelected: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: none;
  border: none;
  color: ${({ isSelected }) => (isSelected ? "#46001b" : "#777986")};
  font-size: 20px;
  font-weight: 400px;
  cursor: pointer;
  border-bottom: ${({ isSelected }) =>
    isSelected ? "2px solid #46001b" : "none"};
  &:hover {
    color: #46001b;
  }
`;
