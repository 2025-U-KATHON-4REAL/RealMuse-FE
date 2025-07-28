import styled from "styled-components";

export const BrandBlock = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 10px; /*사이즈 보기 위해 임의로 줌*/
  border-radius: 12px;
  /*width: 300px;*/
  background: #fff;
`;

export const BrandRow = styled.div`
  display: flex;
  align-items: center;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain; /*본래 비율에 왜곡 없이 이미지 전체를 보여주기 위함*/
  border-radius: 25px;
`;

export const BrandName = styled.h2`
  /*flex-grow: 1;*/
  /*margin-left: 12px;*/
  font-size: 18px;
  font-weight: 600;
`;

export const MatchingRate = styled.span`
  font-size: 14px;
  color: #4caf50;
  font-weight: bold;
`;

export const Description = styled.p`
  margin: 12px 0;
  font-size: 14px;
  color: #555;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const LikeButton = styled.button`
  padding: 8px 16px;
  background: #ff4081;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;

export const SuggestButton = styled.button`
  padding: 8px 16px;
  background: #2196f3;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;
