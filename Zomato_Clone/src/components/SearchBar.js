import { useState } from "react";

function SearchBar() {
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
    </div>
  );
}

export default SearchBar;
