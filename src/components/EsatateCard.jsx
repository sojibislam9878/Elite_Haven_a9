import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const EsatateCard = ({ card }) => {
  const { id, estate_title, image_url, price, status, Locations } = card;
  return (
    <Link to={`/${id}`}>
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure>
          <img
            className="transition duration-300 hover:scale-105"
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold mt-4">{estate_title}</h2>
          <p className="text-lg font-medium opacity-70">{Locations}</p>
          <p className="text-lg font-medium opacity-70">Status: <span className={`badge ${status==="Rent"?"badge-primary":"badge-secondary"}`}>{status}</span></p>
          <p className="text-lg opacity-70 font-medium">Price: {price}</p>
          <div className="">
            <button className="btn bg-blue-500 text-white hover:bg-blue-700 mt-6">View Details</button>
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
