import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
const{resId} = useParams();
  useEffect(() => { 
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
        "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.9351929%26lng%3D77.62448069999999%26restaurantId%3D" + resId

    );
    const json = await data.json();
    console.log(json);
  };
// console.log (resInfo);
//   return resInfo == null ? (
//     <Shimmer />
//   ) : (
    
    return(
        <div className="menu">
        <h1>Resturamnt</h1>
        <h2>Menu</h2>
        <ul>
          <li>Biryani</li>
          <li>Burgers</li>
        </ul>
      </div>
    )
   
//   );
};
export default RestaurantMenu;
