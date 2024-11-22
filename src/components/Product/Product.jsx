import React from "react";

const Product = ({ product }) => {
  const { product_image, product_title, price } = product;
  return (
    <section className="bg-white rounded-2xl p-3 sm:p-3 lg:p-5 border space-y-3 sm:space-y-4 lg:space-y-4">
      <div className="bg-color6 w-full  rounded-2xl">
        <img className="w-full rounded-2xl" src={product_image} alt="" />
      </div>
      <h3>{product_title}</h3>
      <p>Price: {price} $</p>
    </section>
  );
};

export default Product;
