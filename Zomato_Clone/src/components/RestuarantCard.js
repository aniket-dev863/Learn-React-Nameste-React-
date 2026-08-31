function RestuarantCard({ res }) {
  console.log(`Inside the res Card;`);
  console.log(res);
  const { id, type, name, url, imageUrl, subtitleData, proOfferText, rating } =
    res;
  return (
    <div className="restaurant-card">
      <div className="restaurant-card__image-wrapper">
        <img src={imageUrl} className="restaurant-card__image" />
        <button className="restaurant-card__bookmark">♥️</button>
      </div>
      <div className="restaurant-card__content">
        <div className="restaurant-card__rating-row">
          <span className="restaurant-card__rating">
            {rating?.aggregate_rating === undefined
              ? 3
              : rating.aggregate_rating}
            ★
          </span>
          <span className="restaurant-card__type">{type}</span>
        </div>
        <h3 className="restaurant-card__name">{name}</h3>
        {subtitleData.cuisines.map((type) => (
          <p className="restaurant-card__cuisines" key={type.name}>
            {type.name}
          </p>
        ))}
        <p className="restaurant-card__location">
          {subtitleData.locality.text}
        </p>
      </div>
    </div>
  );
}
export default RestuarantCard;
