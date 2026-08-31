import React from "react";
import SearchBar from "./SearchBar";
function SearchSection({ List, setFiltered }) {
  return (
    <div className="search-section">
      <SearchBar List={List} setFiltered={setFiltered} />
    </div>
  );
}
export default SearchSection;
