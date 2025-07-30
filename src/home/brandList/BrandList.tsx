import axios from "axios";
import { useEffect, useState } from "react";
import BrandBox from "../brandBox/BrandBox";
import * as S from "./brandlist.style";
import { dummyBrands } from "../../data/brandDummy";

interface Brand {
  matchingId: number;
  brandID: number;
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
        url = `https://team4real.r-e.kr/creators/matchings/recommendations`;
      } else if (topBarButtonType === "REQUESTS") {
        url = `https://team4real.r-e.kr/creators/matchings/requests`;
      }

      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get<Brand[]>(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        /* 실제 api 연동
        if (Array.isArray(response.data)) {
          setBrands(response.data);
        } else if (response.data) {
          setBrands([response.data]);
        } else {
          alert("API 응답 데이터:\n" + JSON.stringify(response.data, null, 2));
          setBrands([]);
        }*/

        const apiData = Array.isArray(response.data)
          ? response.data
          : [response.data];
        const combinedData = [...apiData, ...dummyBrands];

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
      <text style={{ marginLeft: "20px", fontWeight: "450" }}>
        브랜드 리스트
      </text>
      <S.BrandBoxContainer>
        <div>
          {brands.map((brand) => (
            <BrandBox
              key={brand.brandID}
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
