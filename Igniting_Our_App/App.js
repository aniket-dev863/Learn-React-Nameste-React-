import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "inner" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello this is react nested object ",
    ),
    React.createElement(
      "h2",
      { id: "subheading" },
      "Im Learning React from Akshay Saini ",
    ),
  ]),
);

const heading = React.createElement("h1", {}, "Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
