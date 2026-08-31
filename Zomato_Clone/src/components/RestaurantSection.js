import RestuarantCard from "./RestuarantCard";

function RestaurantSection({ resData }) {
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
