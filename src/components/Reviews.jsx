
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { FaStarHalfAlt } from "react-icons/fa";



const Reviews = () => {
    return (
        <div className="">
            {/* review */}
          <div className="md:mt-32 mt-10">
            <div data-aos-anchor-placement="top-center" className="text-center pb-6 border-b-2 border-dashed">
              <h3 className="text-4xl font-extrabold font-garamond">Latest Reviews</h3>
              <p className="opacity-80 leading-7 mt-6">check out other people experiences with our service</p>
            </div>
            {/* card cantainer */}
            <div className=" md:mt-14 mt-4">
              {/* cards */}
              <Marquee pauseOnHover={true} speed={70} className="p-8">
              <div className="flex gap-8">
              <div className="text-center p-4  shadow-xl rounded-xl w-96">
                {/* profile */}
                <div className="text-6xl text-center flex justify-center text-blue-800">
                  <FaUser />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mt-3">Emily Johnson</h1>
                  <p className="text-lg font-medium opacity-80 mt-4">❝Exceptional experience, exceeded expectations. Found my dream waterfront oasis.❞</p>
                  <p className="text-red-500 mt-3">Rating: 5 / 5</p>
                  {/* stars */}
                  <div className="flex text-orange-500 justify-center mt-3">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              {/* card end */}
              {/* cards */}
              
              <div className="text-center p-4  shadow-xl rounded-xl w-96 ">
                {/* profile */}
                <div className="text-6xl text-center flex justify-center text-blue-800">
                  <FaUser />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mt-3">Michael Thompson</h1>
                  <p className="text-lg font-medium opacity-80 mt-4">❝Breathtaking properties, impeccable service. Found my dream home effortlessly. Highly recommend❞</p>
                  <p className="text-red-500 mt-3">Rating: 4.5 / 5</p>
                  {/* stars */}
                  <div className="flex text-orange-500 justify-center mt-3">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
              {/* card end */}
              {/* cards */}
              <div className=" text-center p-4  shadow-xl rounded-xl w-96 ">
                {/* profile */}
                <div className="text-6xl text-center flex justify-center text-blue-800">
                  <FaUser />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mt-3">Sarah Davis</h1>
                  <p className="text-lg font-medium opacity-80 mt-4">❝Exquisite homes, top-notch service. Perfect getaway, breathtaking views. Thank you❞</p>
                  <p className="text-red-500 mt-3">Rating: 4 / 5</p>
                  {/* stars */}
                  <div className="flex text-orange-500 justify-center mt-3">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </div>
                </div>
              </div>
              {/* card end */}
              {/* cards */}
              <div className="text-center p-4  shadow-xl rounded-xl w-96 mr-8">
                {/* profile */}
                <div className="text-6xl text-center flex justify-center text-blue-800">
                  <FaUser />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mt-3">Christopher Wilson</h1>
                  <p className="text-lg font-medium opacity-80 mt-4">❝Unmatched upscale living. Outstanding staff, seamless buying process.❞</p>
                  <p className="text-red-500 mt-3">Rating: 3.5 / 5</p>
                  {/* stars */}
                  <div className="flex text-orange-500 justify-center mt-3">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                  </div>
                </div>
              </div>
              {/* card end */}
              </div>
              </Marquee>
            </div>
          {/* card container end  */}
          </div>
        </div>
    );
};

export default Reviews;
