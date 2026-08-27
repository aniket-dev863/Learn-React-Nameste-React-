import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComp = () => {
  return (
    <div className="header">
      <div></div>
    </div>
  );
};
const AppLayout = () => {
  return <div>// header // body // footer</div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render();
