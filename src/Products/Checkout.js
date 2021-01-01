import React from "react";
import "./Checkout.css";
import Subtotal from "../Products/subtotal";
import { useStateValue } from "../States/StateProvider";
import CheckoutProduct from "../Products/CheckoutProduct";

 
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div className="checkout__basketempty">
          <h2>Your shoping basket is empty</h2>
          <p>
            Add an item to your basket by just clicking "ADD TO BASKET" from
            Products Thank you for your Precious time for our store
          </p>
        </div>
      ) : (
        <div className="checkout__basketfull">
          <h2>Your Shoping Basket</h2>

          <div className="checkout__subtotal">
            {/* <h1>SUBTOTAL</h1> */}
            <Subtotal />
          </div>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
