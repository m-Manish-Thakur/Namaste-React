import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";

const ResDetail = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [showResList, setShowResList] = useState(0);
  const { resId } = useParams();

  useEffect(() => {
    fetchProduct();
  }, [resId]);

  const fetchProduct = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.8973944&lng=78.0880129&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await res.json();
    setRestaurant(data?.data);
    // console.log(data?.data);
  };

  return (
    <div>
      {restaurant ? (
        <>
          <div className="m-auto w-7/12 p-7 flex justify-between border-b-2 border-dashed">
            <div>
              <h3 className="font-semibold text-xl">{restaurant?.cards[0]?.card?.card?.info?.name}</h3>
              <p className="text-sm font-medium text-gray-700">
                {restaurant?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
              </p>
              <p className="text-sm text-gray-600">{restaurant?.cards[0]?.card?.card?.info?.areaName}</p>
            </div>
            <div className="shadow-inner  p-2 rounded-md">
              <p className="text-center font-semibold text-green-600">
                <i className="fa-solid fa-star mr-2 "></i> {restaurant?.cards[0]?.card?.card?.info?.avgRatingString}
              </p>
              <p className="text-gray-500 text-sm font-semibold text-center">
                {restaurant?.cards[0]?.card?.card?.info?.totalRatingsString}
              </p>
            </div>
          </div>
          <div className="p-7 w-7/12 m-auto">
            {restaurant &&
              restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1, -2).map((item, index) => (
                <>
                  <ResCategory
                    data={item?.card?.card}
                    key={item?.card?.card?.title}
                    showResList={index === showResList ? true : false}
                    setShowResList={() => setShowResList(index)}
                  />
                </>
              ))}
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ResDetail;
