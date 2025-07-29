import styled from "styled-components";

export const TextTitle = styled.h2`
  font-weight: 450px;
`;

export const TestScreenContainer = styled.div`
  margin: 0 16px;

  display: flex;
  flex-direction: column;
  margin-bottom: 40px; /*조정 필요*/
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

export const selectBox = styled.select`
  height: 60px;
  border-radius: 10px;
  background-color: #f3f4f8;
  border-color: #d2d4d4;
  color: #9496a1;
  margin-bottom: 30px;
  font-size: 16px;
  padding: 0 14px;
`;

export const uploadBox = styled.input`
  height: 180px;
  border-radius: 10px;
  background-color: #f3f4f8;
  border-color: #d2d4d4;
  color: #9496a1;
  margin-bottom: 30px;
  font-size: 16px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
`;

export const nextButton = styled.button`
  background-color: #ff2176;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  height: 40px;
  cursor: pointer;
`;

{
  /* screen2 */
}
export const subTitle = styled.text`
  font-size: 18px;
  font-weight: 300px;
  margin-bottom: 12px;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 12px;
  width: 100%;
  margin-bottom: 30px;
`;

export const CategoryButton = styled.button<{ selected: boolean }>`
  padding: 12px;
  border: 2px solid ${({ selected }) => (selected ? "#FF6AA3" : "#ccc")};
  background-color: ${({ selected }) => (selected ? "#FFEDF3" : "#F3F4F8")};
  color: ${({ selected }) => (selected ? "#FF2176" : "#333")};
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border-color: #ff6aa3;
  }
`;

{
  /* result */
}
export const CompleteButton = styled.button`
  background-color: #ff2176;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  height: 60px;
  cursor: pointer;
`;
