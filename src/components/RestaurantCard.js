import { CDN_URL } from "../utils/constants";
// destructuring 
const RestaurantCard  = ({cloudinaryImageId, name, avgRating,cuisine,costForTwo,deliveryTime})=> {
  //   const {resData} = props;
  //  const {
  //   cloudinaryImageId,
  //   name,
  //   avgRating,cuisine,
  //   costForTwo,
  //   deliveryTime,
  //  } = resData?.data;
   console.log(cloudinaryImageId);
  
      return (
        
          <div className="res-card" style={{background: "#f0f0f0"}} >
          <img className="res-logo" 
          alt = "res-logo"
           src={CDN_URL + cloudinaryImageId}>
           </img>
  <h3 className="font-bold py-4 text-lg">{name}</h3>
  <h4>{(cuisine ?? []).join(", ")}</h4>

      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
      
    </div>
      )
  }
  export default RestaurantCard;