import React from "react";
import { createRoot } from "react-dom/client";
import GithubUser from "./components/GithhubUser";

const App = () => {
  return (
    <div>
      <GithubUser />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
