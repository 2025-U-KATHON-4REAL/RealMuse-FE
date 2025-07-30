import styled from "styled-components";
import HomeTest from "../assets/HomeTest.png";

export const TestStartContainer = styled.div`
  margin: 0 16px;
  margin-top: 105px;
  background: linear-gradient(#f3f4f8, #ffe3ee);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 22px;
`;

export const HomeTestImg = styled.div`
  background-image: url(${HomeTest});
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

export const TestDesc = styled.p`
  font-size: 16px;
  text-align: center;
  color: #4e342e;
  margin-bottom: 36px;
`;

export const TestStartButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  background-color: #ff2176;
  color: white;
  font-size: 23px;
  font-weight: 450px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
