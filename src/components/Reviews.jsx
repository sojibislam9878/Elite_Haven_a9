
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";


const Reviews = () => {
    return (
        <div className="mt-32">
            {/* review */}
          <div>
            <div className="text-center">
              <h3 className="text-4xl font-extrabold">Latest Reviews</h3>
              <p className="opacity-80 leading-7 mt-6">check out other people experiences with our service</p>
            </div>
            {/* card cantainer */}
            <div className=" mt-16 ">
              {/* cards */}
              <Marquee pauseOnHover={true} speed={40}>
              <div className="border min-h-20 text-center p-4 ml-4">
                {/* profile */}
                <div className="text-6xl text-center flex justify-center text-blue-800">
                  <FaUser />
                </div>
                <div>
                  <h1>Harry</h1>
                  <p>❝Great, that was a very nice trip❞</p>
                  <p>Rateing: 4 / 5</p>
                  {/* stars */}
                  <div className="flex text-orange-500 justify-center">
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
              
              <div className="border min-h-20 text-center p-4 ml-4">
                {/* profile */}
                <div className="text-6xl text-center flex justify-center text-blue-800">
                  <FaUser />
                </div>
                <div>
                  <h1>Harry</h1>
                  <p>❝Great, that was a very nice trip❞</p>
                  <p>Rateing: 4 / 5</p>
                  {/* stars */}
                  <div className="flex text-orange-500 justify-center">
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
              <div className="border min-h-20 text-center p-4 ml-4">
                {/* profile */}
                <div className="text-6xl text-center flex justify-center text-blue-800">
                  <FaUser />
                </div>
                <div>
                  <h1>Harry</h1>
                  <p>❝Great, that was a very nice trip❞</p>
                  <p>Rateing: 4 / 5</p>
                  {/* stars */}
                  <div className="flex text-orange-500 justify-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </div>
                </div>
              </div>
              {/* card end */}
              </Marquee>
            </div>
          {/* card container end  */}
          </div>
        </div>
    );
};

export default Reviews;
