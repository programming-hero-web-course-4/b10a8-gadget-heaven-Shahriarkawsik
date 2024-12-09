import { AiOutlineControl } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

const Card = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="w-11/12 lg:w-4/5 mx-auto space-y-12">
        <div className="flex justify-between items-center bg-gray-100">
          <h1 className="font-bold text-color1 lg:text-2xl">Cart</h1>
          <div className="flex items-center gap-4 lg:gap-6">
            <h1 className="font-bold text-color1 lg:text-2xl">Total Cost:</h1>
            <button className="text-color3 font-semibold text-18 leading-7 flex items-center gap-3 border border-color3  rounded-full px-[22px] py-3">
              <span>Sort by Price</span>{" "}
              <AiOutlineControl className="text-2xl" />
            </button>
            <button className="bg-color3 text-white font-semibold text-18 leading-7 flex items-center gap-3   rounded-full px-[26px] py-3">
              Purchase
            </button>
          </div>
        </div>
        {/* Gadget */}
        <div className="bg-white rounded-2xl p-8 flex items-center justify-between">
          <img src="" alt="" />
          <div className="space-y-5">
            <h1 className="font-semibold text-color2 lg:text-24 leading-8 ">
              Samsung Galaxy S23 Ultra
            </h1>
            <p className=" text-color2.6 lg:text-18 leading-8 ">
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </p>
            <p className="font-semibold text-color2.8 lg:text-xl leading-8 ">
              Price: $999.99
            </p>
          </div>
          <TiDeleteOutline className="text-red-600 text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Card;
