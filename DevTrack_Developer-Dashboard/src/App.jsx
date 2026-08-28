import developers from "./data/developers";
import DeveloperCard from "./components/DeveloperCard";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  //console.log(developers);
  const filteredDevs = developers.filter((dev) => {
    return dev.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <h1>DevTrack</h1>
      <div>
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div>
        {filteredDevs.map((dev) => (
          <DeveloperCard key={dev.id} developer={dev} />
        ))}
      </div>
    </div>
  );
}

export default App;
