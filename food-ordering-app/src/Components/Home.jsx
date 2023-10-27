import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [search, setSearch] = useState("");

  const handleFilter = () => {
    const filterItems = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filterItems);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const newData = await res.json();
    setData(newData.products);
    setFilteredData(newData.products);
  };

  return (
    <>
      <div id="home">
        <div className="mb-3 d-flex">
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
          {
            filteredData ? (
              filteredData.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))
            ): 
            (
              <h1>Loading...</h1>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Home;
