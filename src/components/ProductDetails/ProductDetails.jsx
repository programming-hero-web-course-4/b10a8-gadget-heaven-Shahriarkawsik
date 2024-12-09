import { AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const product = data.find((product) => product.product_id === id);
  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product;

  return (
    <div className="bg-color3">
      <div className="w-11/12 lg:w-4/5 2xl:w-[72%] h-[400px] sm:h-[600px] lg:h-[694px] 2xl:h-[450px] mx-auto relative top-0 left-0 2xl:p-8">
        {/* banner description */}
        <div className="flex flex-col justify-center items-center my-12 space-y-5 sm:space-y-10 lg:space-y-7">
          <h1 className="font-bold text-xl sm:text-4xl lg:text-3xl lg:leading-10 text-white text-center">
            Product Details
          </h1>
          <p className="font-normal text-base sm:text-2xl leading-7 text-white text-center ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        {/* Banner Image lg:h-[563px]*/}
        <div className="p-2 sm:p-3 lg:p-6 2xl:p-8 w-11/12 sm:w-10/12 lg:w-11/12 2xl:w-10/12  rounded-[32px]  border-2 sm:border-4 bg-white border-color1 absolute top-[72%] sm:top-[68%] lg:top-[62%] 2xl:top-[60%] left-[4%] sm:left-[9%] lg:left-[4%] 2xl:left-[8%] mx-auto grid grid-cols-1 lg:grid-cols-2 2xl:gap-8">
          <img
            className="rounded-[32px] w-full h-full border"
            src={product_image}
            alt=""
          />
          <div className="border">
            <h1>{product_title}</h1>
            <p>Price: {price} $</p>
            <button className="bg-color4.1 text-color4 px-4 py-2 rounded-full border border-color4">
              {availability ? "In stock" : "Stock Out"}
            </button>
            <p>{description}</p>
            <p>Specification:</p>
            <ol className="px-6">
              {Specification.map((item, index) => (
                <li className="list-decimal" key={index}>
                  {item}
                </li>
              ))}
            </ol>
            <p>Rating: {rating}</p>
            <div>
              <button className="font-medium sm:font-bold text-base sm:text-xl lg:text-base bg-color3 text-white rounded-full p-1 lg:px-3 2xl:px-8 lg:py-3 flex justify-center items-center">
                <span>Add To Card </span>
                <AiOutlineShoppingCart className=" text-xl " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
