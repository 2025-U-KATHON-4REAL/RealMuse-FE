import styled from "styled-components";

export const BrandBlock = styled.div`
  margin: 0 16px;
  margin-bottom: 20px;
  padding: 18px 12px;
  border-radius: 12px;
  background: #f3f4f8;
`;

export const BrandLogoRow = styled.div`
  display: flex;
  align-items: center;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlusDescRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;*
  object-fit: contain; /*본래 비율에 왜곡 없이 이미지 전체를 보여주기 위함*/
  border-radius: 5px;
`;

export const BrandName = styled.h2`
  font-size: 18px;
  color: #222222;
  font-weight: 450;
`;

export const MatchingRate = styled.span`
  font-size: 17px;
  color: #222222;
  font-weight: 450;
`;

export const Description = styled.p`
  margin-top: 0;
  margin-right: 10px;
  font-size: 13px;
  color: #5b5d6b;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const LikeButton = styled.button`
  padding: 10px 12px;
  background: #fff;
  color: #ffb4d1;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  flex: 1;
`;

export const SuggestButton = styled.button`
  padding: 8px 16px;
  background: #ff2176;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  flex: 4;
`;
