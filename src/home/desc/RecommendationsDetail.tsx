import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import * as S from "./detail.style";
import TopBar from "../top/TopBar";

const RecommendationsDetail = () => {
  const location = useLocation();
  //const { brandId } = useParams();
  const navigate = useNavigate();

  const toGoHome = () => {
    navigate("/home");
  };

  const brand = location.state?.brand;
  const [selectedType, setSelectedType] = useState<
    "RECOMMENDATIONS" | "REQUESTS"
  >("RECOMMENDATIONS");

  if (!brand) {
    return <div>브랜드 정보를 불러올 수 없음"</div>;
  }

  return (
    <>
      {/* 상단바 속성 임의로 */}
      <TopBar onSelectButtonType={(type) => setSelectedType(type)} />
      <S.BackIconImg onClick={toGoHome} />
      <S.DetailContainer>
        <S.BrandLogoRow>
          <S.Logo src="https://via.placeholder.com/50" alt="Brand Logo" />
          <S.PlusDescRow>
            <S.TopRow>
              <S.BrandName>{brand.name}</S.BrandName>

              <S.MatchingRate>{brand.matchScore}%</S.MatchingRate>
            </S.TopRow>
            <S.Keywords>{brand.keywords}</S.Keywords>
          </S.PlusDescRow>
        </S.BrandLogoRow>
        <S.Description>{brand.description}</S.Description>
        <S.ButtonRow>
          <S.LikeButton>찜</S.LikeButton>
          <S.SuggestButton>제안하기</S.SuggestButton>
        </S.ButtonRow>
      </S.DetailContainer>
    </>
  );
};

export default RecommendationsDetail;
