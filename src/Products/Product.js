import React from "react";
import "./Product.css";
import { useStateValue } from "../States/StateProvider";

const Product = ({ id, title, price, ratings, image, Shop_now }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <h1 className="product__title">{title}</h1>
      <h5 className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </h5>
      <img src={image} alt="" />
      <button onClick={addToBasket}>
        {/* <a href="/checkout"> */}
          {Shop_now}
      </button>
    </div>
  );
};

export default Product;
