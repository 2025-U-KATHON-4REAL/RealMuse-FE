import styled from "styled-components";
import BackIconButton from "../assets/BackIconButton.png";
import AppLogo from "../assets/AppLogo.png";

export const ScreenContainer = styled.div`
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: -60px;
  justify-content: center;
`;

export const inputBox = styled.input`
  height: 60px;
  border-radius: 10px;
  background-color: #f3f4f8;
  border-color: #d2d4d4;
  color: #9496a1;
  margin-bottom: 30px;
  font-size: 16px;
  padding: 0 14px;
`;

export const MainButton = styled.button`
  width: 100%;
  height: 70px;
  background-color: #ff2176;
  color: white;
  font-size: 23px;
  font-weight: 450px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: white;
  z-index: 100;
  padding: 0 16px;
`;

export const Header = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  color: #000;
`;

export const BackIconImg = styled.div`
  background-image: url(${BackIconButton});
  height: 30px;
  width: 30px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export const AppLogoImg = styled.div`
  background-image: url(${AppLogo});
  height: 45px;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  margin: 100px 0;
`;

export const ToGoSignUp = styled.p`
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #9496a1;
  }
`;
