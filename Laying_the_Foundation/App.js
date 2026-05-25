import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="heading">Welcome to React using JSX </h1>;

// React Functional components (name it with capital letter )

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

/**
 * Simple Arrow Function Which Returns some JSX .
 *
 */
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1> Welcome to react using React with Functional Component </h1>
  </div>
);

const heading = React.createElement("h1", {}, "Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
