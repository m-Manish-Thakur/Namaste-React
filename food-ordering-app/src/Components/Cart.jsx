import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../Utils/appStore";
import { clearCart, removeItem } from "../Utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.cart.items);
  console.log(cartData);

  const handleClear = () => {
    dispatch(clearCart());
  };

  const handleRemove = (res) => {
    dispatch(removeItem(res));
  };

  return (
    <div>
      <div className="flex items-center m-auto w-1/2 justify-center">
        <h2 className="text-2xl font-bold text-center py-5">Cart</h2>
        <button className="bg-red-600 rounded-md text-white p-2 ml-5" onClick={handleClear}>
          Clear Cart
        </button>
      </div>
      <div className="w-2/3 m-auto">
        <div>
          {cartData &&
            cartData.map((res) => (
              <>
                <div className="flex justify-between items-center rounded-md p-4 mt-2 border-b-2 border-dashed bg-slate-200">
                  <div className="pr-5">
                    <h1 className="text-base font-medium text-gray-800">{res?.card?.info?.name}</h1>
                    <p>₹{res?.card?.info?.price / 100}</p>
                    <p className="text-xs text-gray-500">{res?.card?.info?.description}</p>
                  </div>
                  <div className="relative" style={{ width: "120px" }}>
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${res?.card?.info?.imageId}`}
                      alt=""
                      style={{ maxWidth: "120px", borderRadius: "10px" }}
                    />
                    <button
                      className="absolute bottom-0 bg-red-600 rounded-md text-white p-1 ml-6"
                      onClick={() => handleRemove(res)}
                    >
                      Remove
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

export default Cart;
