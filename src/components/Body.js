import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRes, setRestaurents] = useState(resList)
  return (
    <div className="body">
        <button className="filter-btn" onClick={() => {
            const filteredList = listOfRes.filter((res)=>res.info.avgRating > 4)
            console.log(filteredList)
            setRestaurents(filteredList)
        }}>
        Top Rated Restaurants
        </button>
      <div className="res-container">
        {listOfRes.map((item) => (
          <RestaurantCard key={item.info.id} resList={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
