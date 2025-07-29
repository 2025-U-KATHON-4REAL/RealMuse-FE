import React from "react";
import * as S from "./brandBox.style";

interface BrandBoxProps {
  brand: {
    matchingId: number;
    brandID: number;
    name: string;
    image: string;
    matchScore: number;
    keywords: string;
    description: string;
    status: string;
    liked: boolean;
  };
}

const BrandBox: React.FC<BrandBoxProps> = ({ brand }) => {
  return (
    <S.BrandBlock>
      <S.BrandLogoRow>
        <S.Logo src="https://via.placeholder.com/50" alt="Brand Logo" />
        <S.PlusDescRow>
          <S.TopRow>
            <S.BrandName>{brand.name}</S.BrandName>

            <S.MatchingRate>{brand.matchScore}%</S.MatchingRate>
          </S.TopRow>
          <S.Description>{brand.keywords}</S.Description>
        </S.PlusDescRow>
      </S.BrandLogoRow>
      <S.ButtonRow>
        <S.LikeButton>찜</S.LikeButton>
        <S.SuggestButton>제안하기</S.SuggestButton>
      </S.ButtonRow>
    </S.BrandBlock>
    /*
    <S.BrandBlock>
      <S.BrandLogoRow>
        <S.Logo src="https://via.placeholder.com/50" alt="Brand Logo" />
        <S.PlusDescRow>
          <S.TopRow>
            <S.BrandName>브랜드 이름</S.BrandName>

            <S.MatchingRate>85%</S.MatchingRate>
          </S.TopRow>
          <S.Description>
            여기는 브랜드 설명이 들어가는 영역입니다.
          </S.Description>
        </S.PlusDescRow>
      </S.BrandLogoRow>
      <S.ButtonRow>
        <S.LikeButton>찜</S.LikeButton>
        <S.SuggestButton>제안하기</S.SuggestButton>
      </S.ButtonRow>
    </S.BrandBlock>*/
  );
};

export default BrandBox;
