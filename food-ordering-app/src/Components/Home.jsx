import React, { useEffect, useState } from "react";
import Rescard from "./ResCard";
import { FETCH_URL } from "../Utils/Constants";
const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      fetchData();
    }
  }, [data]);

  const fetchData = async () => {
    try {
      const res = await fetch(FETCH_URL);
      if (res.ok) {
        const newData = await res.json();
        console.log(newData);
        setData(
          newData?.data?.success?.cards[4]?.gridWidget?.gridElements
            ?.infoWithStyle.restaurants
        );
      } else {
        console.error("Failed to fetch data. Status:", res.status);
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  return (
    <>
      <div id="home">
        <h2>Restaurants with online food delivery in Aligarh</h2>
        <div id="foodList">
          {data ? (
            data.map((item) => <Rescard item={item} key={item?.info?.id} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
