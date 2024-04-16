import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
const EsatateCard = ({ card }) => {
  const { id, estate_title, image_url, price, status, Locations } = card;
  return (
    <Link to={`details/${id}`}>
      <div
        // data-aos="zoom-in-up"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="600"
        // data-aos="flip-left"
        data-aos={id % 2 === 0 ? "flip-left" : "flip-right"}
        data-aos-duration="1000"
        className="card card-compact bg-base-100 shadow-xl h-full"
      >
        <figure>
          <img
            className="transition duration-300 hover:scale-105"
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold mt-4 font-garamond bg-gradient-to-r from-[#4facfe] to-blue-500 bg-clip-text text-transparent">
            {estate_title}
          </h2>
          <p className="text-lg font-medium opacity-70 flex items-center gap-2">
            <FaLocationDot />
            {Locations}
          </p>
          <p className="text-lg font-medium opacity-70">
            Status:{" "}
            <span
              className={`badge ${
                status === "Rent" ? "badge-primary" : "badge-secondary"
              }`}
            >
              {status}
            </span>
          </p>
          <p className="text-lg opacity-70 font-medium">Price: {price}</p>
          <div className="">
            <button className="btn bg-blue-500 text-white hover:bg-blue-700 mt-6">
              View Property
            </button>
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
