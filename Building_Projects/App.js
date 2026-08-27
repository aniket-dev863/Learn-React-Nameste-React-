import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComp = () => {
  return (
    <div className="Header-Component">
      <div className="Logo-Container">
        <img
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
        />
      </div>
      <div className="Nav_items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <HeaderComp />
      <div>Body</div>
      <div>Footer</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
