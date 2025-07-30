import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import * as S from "./detail.style";
import TopBar from "../top/TopBar";

const RequestsDetail = () => {
  const location = useLocation();
  //const { brandId } = useParams();
  const navigate = useNavigate();

  const toGoHome = () => {
    navigate("/home");
  };

  const brand = location.state?.brand;
  const [selectedType, setSelectedType] = useState<
    "RECOMMENDATIONS" | "REQUESTS"
  >("REQUESTS");

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
        <S.Message />
        <S.ButtonRow>
          <S.LikeButton style={{ flex: "none", width: "54px" }}>
            찜
          </S.LikeButton>
          <S.SuggestButtonContainer>
            <S.SuggestButton
              style={{
                background: "white",
                color: "#ff2176",
                width: "110px",
              }}
            >
              거절하기
            </S.SuggestButton>
            <S.SuggestButton
              style={{
                width: "110px",
              }}
            >
              제안 수락하기
            </S.SuggestButton>
          </S.SuggestButtonContainer>
        </S.ButtonRow>
      </S.DetailContainer>
    </>
  );
};

export default RequestsDetail;
