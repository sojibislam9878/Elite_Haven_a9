import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BookMarkCard = ({items}) => {
    console.log(items);
    const {id,estate_title , image_url , Locations, status, price}=items
    const removeBookMark=()=>{
        const savedEstate=JSON.parse(localStorage.getItem("savedstate")) || []
        const filter =savedEstate.filter(items=>items.id !=  id)
        console.log(filter);
        localStorage.setItem("savedstate", JSON.stringify(filter))
        location.reload()
    }
    
    return (
        <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure>
          <img
            className=""
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold mt-4">{estate_title}</h2>
          <p className="text-lg font-medium opacity-70">{Locations}</p>
          <p className="text-lg font-medium opacity-70">Status: <span className={`badge ${status==="Rent"?"badge-primary":"badge-secondary"}`}>{status}</span></p>
          <p className="text-lg opacity-70 font-medium">Price: {price}</p>
          <div className=" flex flex-wrap gap-9">
            <Link to={`/${id}`}>
            <button className="btn bg-blue-500 text-white hover:bg-blue-700 mt-6">View Property</button>
            </Link>
            <button
            onClick={removeBookMark}
             className="btn bg-red-700 text-white hover:bg-red-800 mt-6">Remove from Book Mark</button>
          </div>
        </div>
      </div>
    );
};
BookMarkCard.propTypes = {
    items:PropTypes.object
  };
export default BookMarkCard;