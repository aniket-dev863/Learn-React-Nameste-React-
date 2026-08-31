import react from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <button className="navbar__back">🔙</button>
      <div className="navbar__logo ">Zomato</div>
      <button className="navbar__profile">👤</button>
    </nav>
  );
}

export default Navbar;
