import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const RestaurantList = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItems = (res) => {
    dispatch(addItem(res));
  };

  return (
    <>
      <div>
        {data &&
          data.map((res) => (
            <>
              <div className="flex justify-between items-center py-4 border-b-2 border-dashed">
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
                    className="absolute bottom-0 bg-black rounded-md text-white p-1 ml-9"
                    onClick={() => handleAddItems(res)}
                  >
                    Add+
                  </button>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default RestaurantList;
