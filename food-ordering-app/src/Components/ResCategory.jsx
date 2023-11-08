import React from "react";
import RestaurantList from "./RestaurantList";

const ResCategory = ({ data, showResList, setShowResList }) => {
  const handleClick = () => {
    setShowResList();
  };
  return (
    <>
      <div
        className="flex justify-between items-center p-2 mt-2 rounded-md bg-blue-100 shadow-md"
        onClick={() => setShowResList()}
      >
        <h1 className="font-semibold text-gray-800">
          {data?.title}({data?.itemCards ? data?.itemCards.length : 0})
        </h1>
        <p>🔽</p>
      </div>
      {showResList && (
        <RestaurantList
          data={data?.itemCards}
          key={data?.itemCards?.card?.info?.id}
        />
      )}
    </>
  );
};

export default ResCategory;
