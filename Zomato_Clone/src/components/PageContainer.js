import React from "react";
import { useState } from "react";
import SearchSection from "./SearchSection";
import RestaurantSection from "./RestaurantSection";
import allRestuarants from "../data/resData.json";

function PageContainer() {
  const [List] = useState(allRestuarants);
  const [filterd, setFiltered] = useState(allRestuarants);
  return (
    <div>
      <SearchSection List={List} setFiltered={setFiltered} />
      <RestaurantSection resData={filterd} />
    </div>
  );
}

export default PageContainer;
