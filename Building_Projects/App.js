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

const RestaurentCard = () => {
  return (
    <div className="resCard">
      <img
        className="resImg"
        alt="IMG"
        src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani , Chinese and Thai Cousines</h4>
      <h4>4.4 Stars</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="Body">
      <div className="Search">SearchBar</div>
      <div className="Restuarent-Container">
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <HeaderComp />
      <div>
        <BodyComponent />
      </div>
      <div>Footer</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
