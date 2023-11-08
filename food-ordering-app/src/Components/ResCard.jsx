import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const ResCard = ({ item }) => {
  return (
    <>
      <div id="resCard" className="mt-50 bg-slate-100">
        <Link to={`/restaurants/${item?.info?.id}`}>
          <div
            className="img"
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent, rgb(0,0,0,0.8)), URL(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.info?.cloudinaryImageId})`,
            }}
          >
            <h4>
              {item?.info?.aggregatedDiscountInfoV3?.header}{" "}
              {item?.info?.aggregatedDiscountInfoV3?.subHeader}
            </h4>
          </div>
        </Link>
        <p className="title">{item?.info?.name.substring(0, 25)}..</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="rating">Rating: {item?.info?.avgRating}</p>
          <p>{item?.info?.sla?.slaString}</p>
        </div>
        <p>{item?.info?.locality}</p>
      </div>
    </>
  );
};

export default ResCard;
