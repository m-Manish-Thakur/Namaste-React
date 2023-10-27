import React from "react";
import { useParams } from "react-router-dom";
import useGetProduct from "../Utils/useGetProduct";

const SingleProduct = () => {
  const { productId } = useParams();
  const productInfo = useGetProduct(productId);
  console.log(productInfo);
  return (
    <div>
      {productInfo ? (
        <div id="resCard">
          <img src={productInfo.thumbnail} alt="" />
          <p className="title">{productInfo.title}</p>
          <p className="category">{productInfo.category}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className="price">₹ {productInfo.price}</p>
            <p className="rating">Rating: {productInfo.rating}</p>
          </div>
          <button>Add to cart</button>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SingleProduct;
