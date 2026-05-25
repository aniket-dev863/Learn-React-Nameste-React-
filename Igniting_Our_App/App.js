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

// Making react objects using jsx .
const jsxHeading = <h1 id="heading">Welcome to React using JSX </h1>;
// Here jsx is not the pure javascript .
// Javascript is a code that js engine can handle .
// js Engine cannot handle -- jsxHeading
// this code is transpiled  by our Bundlers like parcel before it reaches the
// js Engine.

/**
 * Transpiled -  Converted to a format that end level engine will understand .
 * Transpiled by the Pracel .
 * Parcel - Uses the Babel for the Transpilation .
 * Parcel - installed the package like babel .
 */

const heading = React.createElement("h1", {}, "Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
