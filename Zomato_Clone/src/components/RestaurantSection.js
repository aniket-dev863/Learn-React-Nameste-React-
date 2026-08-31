import RestuarantCard from "./RestuarantCard";
import resData from "../data/resData.json";

function RestaurantSection() {
  return (
    <div className="restaurant-section">
      <div className="restaurant-grid">
        {resData.map((restuarant) => (
          <RestuarantCard key={restuarant.id} res={restuarant} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantSection;
