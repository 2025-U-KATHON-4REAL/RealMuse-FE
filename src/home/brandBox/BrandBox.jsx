import React from "react";
import * as S from "./brandBox.style";

const BrandBox = () => {
  return (
    <S.BrandBlock>
      <S.TopRow>
        <S.BrandRow>
          <S.Logo src="https://via.placeholder.com/50" alt="Brand Logo" />
          <S.BrandName>브랜드 이름</S.BrandName>
        </S.BrandRow>
        <S.MatchingRate>85%</S.MatchingRate>
      </S.TopRow>
      <S.Description>여기는 브랜드 설명이 들어가는 영역입니다.</S.Description>
      <S.ButtonRow>
        <S.LikeButton>찜</S.LikeButton>
        <S.SuggestButton>제안하기</S.SuggestButton>
      </S.ButtonRow>
    </S.BrandBlock>
  );
};

export default BrandBox;
