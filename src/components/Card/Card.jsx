import { useContext } from "react";
import { AiOutlineControl } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { gadgetContext } from "../../AuthContent/AuthContent";
import { Alert } from "../../Alert/Alert";

const Card = () => {
  const { gadgetCard, setGadgetCard, totalCardPrice, setTotalCardPrice } =
    useContext(gadgetContext);
  // Calculate gadget price in card
  setTotalCardPrice(gadgetCard.reduce((acc, gadget) => acc + gadget.price, 0));

  // sorted
  const handleSortByPrice = () => {
    setGadgetCard([...gadgetCard].sort((a, b) => b.price - a.price));
    Alert(true, "Gadget is sorted by price.");
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="w-11/12 lg:w-4/5 mx-auto space-y-12">
        <div className="flex justify-between items-center bg-gray-100">
          <h1 className="font-bold text-color1 lg:text-2xl">Cart</h1>
          <div className="flex items-center gap-4 lg:gap-6">
            <h1
              // onClick={() => handleTotalCardPrice()}
              className="font-bold text-color1 lg:text-2xl"
            >
              Total Cost: {totalCardPrice}
            </h1>
            <button
              onClick={() => handleSortByPrice()}
              className="text-color3 font-semibold text-18 leading-7 flex items-center gap-3 border border-color3  rounded-full px-[22px] py-3"
            >
              <span>Sort by Price</span>{" "}
              <AiOutlineControl className="text-2xl" />
            </button>
            <button className="bg-color3 text-white font-semibold text-18 leading-7 flex items-center gap-3   rounded-full px-[26px] py-3">
              Purchase
            </button>
          </div>
        </div>
        {/* Gadget */}
        <div className="space-y-5">
          {gadgetCard.map((gadget, product_id) => (
            <>
              <div
                key={product_id}
                className="bg-white rounded-2xl p-8 grid items-center justify-between grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5"
              >
                <div className="p-3 rounded-xl shadow-md lg:col-span-1">
                  <img className="mx-auto" src={gadget?.product_image} alt="" />
                </div>
                <div className="lg:col-span-2 flex justify-between items-center">
                  <div className="space-y-5">
                    <h1 className="font-semibold text-color2 lg:text-24 leading-8 ">
                      {gadget?.product_title}
                    </h1>
                    <p className=" text-color2.6 lg:text-18 leading-8 ">
                      {gadget?.product_title}
                    </p>
                    <p className="font-semibold text-color2.8 lg:text-xl leading-8 ">
                      Price: ${gadget?.price}
                    </p>
                  </div>
                  {/* Delete btn */}
                  <button
                    onClick={() => {
                      const remainGadgetInCard = gadgetCard.filter(
                        (item) => item.product_id !== gadget.product_id
                      );
                      setGadgetCard(remainGadgetInCard);
                      Alert(true, "Successfully remove Gadget from Card.");
                    }}
                  >
                    <TiDeleteOutline className="text-red-600 text-3xl" />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
