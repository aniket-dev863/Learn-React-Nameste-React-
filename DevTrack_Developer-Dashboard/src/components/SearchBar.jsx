const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Skill"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
