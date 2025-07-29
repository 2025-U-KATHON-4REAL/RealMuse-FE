import axios from "axios";
import { useEffect, useState } from "react";
import BrandBox from "../brandBox/BrandBox";

interface Brand {
  //id: number;
  //name: string;
}

const BrandList: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const { data } = await axios.get<Brand[]>("/api/brands");
        if (Array.isArray(data)) {
          setBrands(data);
        } else {
          console.error("Fetched data is not an array: ", data);
          setBrands([]);
        }
      } catch (error) {
        console.error("Error fetching brands: ", error);
        setBrands([]);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div>
      <text>브랜드 리스트</text>
      {/*<div>
        {brands.map(({}, index) => (
          <BrandBox />
        ))}
      </div>*/}
      <BrandBox />
      <BrandBox />
      <BrandBox />
      <BrandBox />
      <BrandBox />
      <BrandBox />
      <BrandBox />
      <BrandBox />
    </div>
  );
};

export default BrandList;
