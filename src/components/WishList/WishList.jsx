import { TiDeleteOutline } from "react-icons/ti";

const WishList = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="w-11/12 lg:w-4/5 mx-auto space-y-12">
        <h1 className="font-bold text-color1 lg:text-2xl">WishList</h1>
        {/* Gadget */}
        <div className="bg-white rounded-2xl p-8 flex items-center justify-between">
          <img src="" alt="" />
          <div className="space-y-5">
            <h1 className="font-semibold text-color2 lg:text-24 leading-8 ">
              Samsung Galaxy S23 Ultra
            </h1>
            <p className=" text-color2.6 lg:text-18 leading-8 space-x-2">
              <span className="font-semibold text-color2 lg:text-18 leading-8 ">
                Description:
              </span>
              <span>
                Ultra-slim, high-performance laptop with 13.4-inch InfinityEdge
                display.
              </span>
            </p>
            <p className="font-semibold text-color2.8 lg:text-xl leading-8 ">
              Price: $999.99
            </p>
            <button
              className="font-medium sm:font-bold text-base sm:text-xl lg:text-base bg-color3 text-white 
                rounded-full px-5 py-2 lg:px-3 2xl:px-8 lg:py-3 "
            >
              Add To Card
            </button>
          </div>
          <TiDeleteOutline className="text-red-600 text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default WishList;
