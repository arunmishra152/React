import { RES_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resList} = props;
    let { name, areaName, costForTwo, cuisines, cloudinaryImageId, avgRating } = resList?.info;
    // let filteredCuisines = cuisines.filter((cuisine)=>cuisine.length>3)
    // console.log(filteredCuisines)
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={RES_IMG+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h5>{areaName}</h5>
        <h4>{costForTwo}</h4>
        <h5>{avgRating} Stars</h5>
        <h5>{cuisines.slice(0,3).join(", ")}</h5>
      </div>
    );
  };

  export default RestaurantCard;