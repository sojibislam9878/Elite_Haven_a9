import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const EsatateCard = ({ card }) => {
  const { id, estate_title, image_url, price, status, location } = card;
  return (
    <Link to={`/${id}`}>
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure>
          <img
            className="transition hover:scale-110"
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold mt-4">{estate_title}</h2>
          <p className="text-lg font-medium opacity-70">{location}</p>
          <p className="text-lg opacity-70">Status: {status}</p>
          <p className="text-lg opacity-70">Price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};
EsatateCard.propTypes = {
  card: PropTypes.object,
};
export default EsatateCard;
