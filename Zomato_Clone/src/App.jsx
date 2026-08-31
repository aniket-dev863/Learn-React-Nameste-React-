import react from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import Navbar from "./components/navbar";
import PageContainer from "./components/PageContainer";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <PageContainer />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
