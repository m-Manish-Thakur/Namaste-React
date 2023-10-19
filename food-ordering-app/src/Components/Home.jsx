import React, { useState } from "react";
import ResCard from "./ResCard";
import data from "../Utils/data";

const Home = () => {
  const [Data, setData] = useState(data);
  const [filteredData, setFilteredData] = useState(Data);
  const [search, setSearch] = useState("");

  const handleFilter = (e) => {
    const filterItems = Data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filterItems);
    console.log(filterItems);
  };

  return (
    <>
      <div id="home">
        <div class="mb-3 d-flex">
          <input
            type="search"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Search Food"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleFilter();
            }}
          />
        </div>
        <div id="foodList">
          {filteredData.map((item) => (
            <ResCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
