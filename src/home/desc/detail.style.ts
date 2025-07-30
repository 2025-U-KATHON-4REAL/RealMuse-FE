import styled from "styled-components";
import BackIconButton from "../../assets/BackIconButton.png";

export const DetailContainer = styled.div`
  margin: 0 16px;
  margin-top: 15px;
  background: linear-gradient(#f3f4f8, #ffe3ee);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 40px 22px;
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
  width: 100%;
  padding: 0 10px;
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

export const Keywords = styled.p`
  margin-top: 0;
  margin-right: 10px;
  font-size: 13px;
  color: #5b5d6b;
`;

export const Description = styled.p`
  margin: 24px 0; /*조정 필요*/
  margin-right: 10px;
  font-size: 13px;
  color: #5b5d6b;
  white-space: pre-line;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const LikeButton = styled.button`
  padding: 10px 12px;
  background: #fff;
  color: #ff2176;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const SuggestButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const SuggestButton = styled.button`
  padding: 8px 16px;
  background: #ff2176;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  flex: 1;
`;

export const BackIconImg = styled.div`
  background-image: url(${BackIconButton});
  height: 30px;
  width: 30px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  margin-top: 105px;
  margin-left: 16px;
`;

/*요청 텍스트창*/
export const Message = styled.textarea`
  background: white;
  margin-bottom: 24px; /*조정 필요*/
  border: none;
  border-radius: 10px;
  min-height: 100px;
  font-size: 16px;
  padding: 14px 12px;
  resize: vertical; /* 세로 크기 조절 가능 */
  vertical-align: top; /* 텍스트 상단 정렬 */
`;
