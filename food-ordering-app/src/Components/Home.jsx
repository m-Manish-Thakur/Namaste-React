import React, { useState } from "react";
import ResCard from "./ResCard";
import data from "../Utils/data";

const Home = () => {

  const [Data, setData] = useState(data);

  

  return (
    <>
      <div id="home">
        <button className="filterBtn">4+ Rating Food</button>
        <button className="filterBtn" style={{marginLeft:'15px'}}>3+ Rating Food</button>
        <div id="foodList">
          {Data.map((item) => (
            <ResCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
