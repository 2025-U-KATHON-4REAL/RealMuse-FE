import styled from "styled-components";

export const BarContainer = styled.div`
  position: absolute; /*부모를 기준으로 하단에 고정*/
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #ccc;
  display: flex; /*내부 아이템 가로 정렬*/
  justify-content: space-between;
  align-items: center;
`;

export const iconButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
