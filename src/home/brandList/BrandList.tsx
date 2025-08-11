import axios from "axios";
import { useEffect, useState } from "react";
import BrandBox from "../brandBox/BrandBox";
import * as S from "./brandlist.style";
import { dummyBrands } from "../../data/brandDummy";

interface Brand {
  matchingId: number;
  brandId: number;
  name: string;
  image: string;
  matchScore: number;
  keywords: string;
  description: string;
  status: string;
  liked: boolean;
}

interface BrandList {
  topBarButtonType: "RECOMMENDATIONS" | "REQUESTS";
}

const BrandList: React.FC<BrandList> = ({ topBarButtonType }) => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      let url = ``;

      if (topBarButtonType === "RECOMMENDATIONS") {
        url = `${process.env.REACT_APP_BACKEND_URL}/creators/matchings/recommendations`;
      } else if (topBarButtonType === "REQUESTS") {
        url = `${process.env.REACT_APP_BACKEND_URL}/creators/matchings/requests`;
      }

      try {
        const token = localStorage.getItem("accessToken");

        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const apiData = Array.isArray(response.data.items)
          ? response.data.items
          : [];
        const combinedData = [...apiData, ...dummyBrands];

        {
          /* 데이터 확인 */
        }
        console.log(JSON.stringify(response.data, null, 2));
        alert("API 응답 데이터:\n" + JSON.stringify(response.data, null, 2));

        setBrands(combinedData);
      } catch (error) {
        alert("API 호출 실패: " + error);
        setBrands(dummyBrands);
        //setBrands([]);
      }
    };

    fetchBrands();
  }, [topBarButtonType]); //topBarButtonType이 바뀔 때마다 api 호출

  return (
    <S.BrandListContainer>
      <div style={{ marginLeft: "20px", fontWeight: "450" }}>브랜드 리스트</div>
      <S.BrandBoxContainer>
        <div>
          {brands.map((brand) => (
            <BrandBox
              key={brand.brandId}
              brand={brand}
              topBarButtonType={topBarButtonType}
            />
          ))}
        </div>
      </S.BrandBoxContainer>
    </S.BrandListContainer>
  );
};

export default BrandList;
