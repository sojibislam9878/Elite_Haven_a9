import { useParams } from "react-router-dom";
import useFetchData from "../Hooks/useFetchData";
import { useEffect, useState } from "react";
const CardDetails = () => {
    const {data}=useFetchData()
    const {id}=useParams();
    const [singleCard , setSingleCard]=useState([])
    useEffect(()=>{
        const card = data.find(items=> items.id == id);
        setSingleCard(card)
    },[data , id])
    const {price}=singleCard || {}
    return (
        <div className="lg:flex gap-4 mt-12 container mx-auto p-4">
      <div className=" lg:w-1/3 flex justify-center items-center">
        <img
          className="h-full w-full object-cover rounded-xl"
          src="https://i.ibb.co/PhBq0gw/3.jpg"
          alt=""
        />
      </div>
      <div className=" lg:w-2/3 mt-6 lg:mt-0">
        <h1 className="text-4xl font-bold playfair">kochu</h1>
        <p className="text-xl font-medium opacity-80 mt-4">By: nai</p>
        <div>
          <h6 className="border-y-2 text-xl font-medium opacity-80 py-4 mt-6">
            faltu
          </h6>
        </div>
        <p className="mt-6">
          <span className="font-bold leading-6">Review:</span>{" "}
          <span className="opacity-70 leading-6">lorem</span>
        </p>
        <div className="border-b-2 pb-5 flex items-center mt-7">
          <p className="font-bold">Tag:</p>
          <button className="bg-slate-100 px-3 py-2 rounded-full text-green-400 font-medium">gello
          </button>
          <button className="bg-slate-100 px-3 py-2 rounded-full text-green-400 font-medium">hello
          </button>
        </div>
        <div className="mt-6">
          <table className="w-full lg:w-2/3">
            <tr className="">
              <td className="w-2/3 opacity-70">Number Of Pages:</td>
              <td className="font-medium">jani na</td>
            </tr>
            <tr className="">
              <td className="w-2/3 opacity-70">Publisher:</td>
              <td className="font-medium">newton</td>
            </tr>
            <tr className="">
              <td className="w-2/3 opacity-70">Year of Publishing:</td>
              <td className="font-medium">12</td>
            </tr>
            <tr className="">
              <td className="w-2/3 opacity-70">Rating:</td>
              <td className="font-medium">00</td>
            </tr>
          </table>
          <div className="mt-8">
            <button
              className="btn bg-transparent border-2 mr-6"
            >
              Read
            </button>
            <button
              className="btn bg-[#50B1C9] text-white"
            >
              wish list
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CardDetails;