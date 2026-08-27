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

const RestaurentCard = (props) => {
  return (
    <div className="resCard">
      <img
        className="resImg"
        alt="IMG"
        src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
      />
      <h3>{props.name}</h3>
      <h4>{props.Cuisine}</h4>
      <h4>{props.Rating}</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="Body">
      <div className="Search">SearchBar</div>
      <div className="Restuarent-Container">
        <RestaurentCard
          name="Meghna Foods"
          Cuisine="Biryani , Chinese and Thai Cousines"
          Rating="4.4 Stars"
        />
        <RestaurentCard
          name="KFC"
          Cuisine="Biryani , Chinese and Thai Cousines"
          Rating="4.8 Stars"
        />
        <RestaurentCard
          name="MTR"
          Cuisine="South Indian Dishes"
          Rating="4.3 Stars"
        />
        <RestaurentCard
          name="Mamledar Misal"
          Cuisine="Maharashtrian Dishes"
          Rating="4.3 Stars"
        />
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
