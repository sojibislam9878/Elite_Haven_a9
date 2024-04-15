import { useParams } from "react-router-dom";
import useFetchData from "../Hooks/useFetchData";
import { useEffect, useState } from "react";
import { addBookMark } from "../utils/addBookMark";
import { Helmet } from "react-helmet";
const CardDetails = () => {
  const { data } = useFetchData();
  const { id } = useParams();
  const [singleCard, setSingleCard] = useState([]);
  useEffect(() => {
    const card = data.find((items) => items.id == id);
    setSingleCard(card);
  }, [data, id]);
  console.log(singleCard);
  const {
    estate_title,
    image_url,
    description,
    segment_name,
    price,
    area,
    status,
    facilities,
    Locations
  } = singleCard || {};
  const [one, two, three] = facilities || [];
  return (
    <div className=" mt-12 container mx-auto p-4">
      <Helmet>
      <title>{`Details of ${estate_title}`}</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${image_url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className=" w-full h-[40rem] lg:h-[43.75rem] mx-auto rounded-xl object-cente relative"
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-4xl font-bold">{segment_name}</h1>
        </div>
        <div 
        onClick={()=>{addBookMark(singleCard)}}
        className="absolute right-10 top-10 bg-white p-3 bg-opacity-40 rounded-xl text-pink-600 hover:cursor-pointer">
        <span className="material-symbols-outlined">bookmark_add</span>
        </div>
      </div>
      <div className=" mt-6">
        <h1 className="text-4xl font-extrabold flex items-center gap-4 font-garamond">
          {estate_title}{" "}
          <sup
            className={`badge ${
              status === "Rent" ? "badge-primary" : "badge-secondary"
            }`}
          >
            {status}
          </sup>
        </h1>
        <p className="text-xl font-medium opacity-80 mt-4">{description}</p>
        <div>
          <h6 className="border-y-2 text-xl font-medium opacity-80 py-4 mt-6 flex items-center gap-4"><span className="material-symbols-outlined">location_on</span>
            {Locations}
          </h6>
        </div>
        <div className="mt-6 flex  gap-20">
          <p className="font-medium flex items-center gap-3">
            <span className="material-symbols-outlined">paid</span> {price}
          </p>
          <p className="flex items-center font-medium gap-3">
            <span className="material-symbols-outlined">area_chart</span> {area}
          </p>
        </div>
        <div className="border-b-2 pb-5 gap-8 items-center mt-7 border p-4 bg-blue-400 bg-opacity-30 rounded-xl">
          <h1 className="text-3xl font-medium">Facilities :</h1>
          <div className="flex gap-8 mt-5">
            <button className="font-bold flex gap-7 btn">{one}</button>
            <button className="font-bold flex gap-7 btn">{two}</button>
            <button className="font-bold flex gap-7 btn">{three}</button>
          </div>
        </div>
        <div className="mt-6">
          <button 
          onClick={()=>{addBookMark(singleCard)}}
          className="btn bg-gradient-to-r from-[#4facfe] to-blue-500 text-white text-xl">
            Add to BookMark
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
