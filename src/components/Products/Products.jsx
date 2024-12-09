import React, { useContext, useEffect, useState } from "react";
import Product from "../Product/Product";
import { gadgetContext } from "../../AuthContent/AuthContent";

const Products = () => {
  const { products, setProducts } = useContext(gadgetContext);

  useEffect(() => {
    fetch("/gadgets.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  // check Product category
  const productCategory = [];
  products.map((product) => {
    if (!productCategory.includes(product.category)) {
      productCategory.push(product.category);
    }
  });

  return (
    <section className="w-11/12 sm:w-11/12 lg:w-11/12 2xl:w-4/5 mx-auto mt-[170px] sm:mt-[240px] lg:mt-[320px] 2xl:mt-[350px] font-Sora space-y-6 sm:space-y-8 lg:space-y-10">
      <h1 className="font-bold text-2xl sm:text-40 lg:text-3xl 2xl:text-40 2xl:leading-50 text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      {/* show product */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 ">
        <div className="col-span-1 sm:col-span-1 lg:col-span-1 border rounded-xl max-h-fit py-4 lg:p-3 2xl:p-6 space-y-3 lg:space-y-3">
          <p className="font-medium sm:font-bold text-base sm:text-xl lg:text-base bg-color3 text-white rounded-full p-1 lg:px-3 2xl:px-8 lg:py-3 max-2xl:text-center">
            All Product
          </p>
          {productCategory.map((product, index) => (
            <p
              key={index}
              className="font-medium text-base sm:text-xl lg:text-base bg-color2.05 text-color2.6 rounded-md lg:rounded-full 2xl:rounded-full max-lg:mx-3 p-1 sm:px-2 lg:px-3 2xl:px-8 lg:py-3 max-2xl:text-center"
            >
              {product}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-span-2  sm:col-span-3 lg:col-span-5  gap-4 lg:gap-6">
          {products.map((product, product_id) => (
            <Product key={product_id} product={product}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
