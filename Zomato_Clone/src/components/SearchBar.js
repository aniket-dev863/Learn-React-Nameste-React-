import { useState } from "react";

function SearchBar({ List, setFiltered }) {
  const [query, setquery] = useState("");
  return (
    <div className="search-bar">
      <div className="search-bar__icon">🔎</div>
      <input
        className="search-bar__input"
        type="search"
        value={query}
        onChange={(e) => {
          setquery(e.target.value);
        }}
        placeholder="Search..."
      />
      <button
        onClick={() => {
          setFiltered(
            List.filter((data) => {
              return data.name.toLowerCase().includes(query.toLowerCase());
            }),
          );
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
