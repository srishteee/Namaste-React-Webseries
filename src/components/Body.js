
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
   
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);

    useEffect(() => {

        fetchData();
      }, []);
    

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTINGhttps://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json.data.cards);
        
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    // the below concept is known as conditional rendering which means rendering under conditions
    if (listOfRestaurants.length===0){
        return <Shimmer/>;
    
    }
   
    return (
        <div className = "body">
        <div className="filter">
        <div className="search">
        
            <input type="text" className="search-box" value={searchText}  onChange={(e)=>{
                setSearchText(e.target.value);
            }}
                
            /> 
            <button onClick={()=>{
                // filter the res cards and update the ui for that inneed search text i.e input box
// bind the value to the local state variable of react 
          
        console.log(searchText);

        const filteredList = listOfRestaurants.filter((listOfRestaurants) => listOfRestaurants?.info?.name.toLowerCase().includes(searchText.toLowerCase()));

setFilteredRestaurant(filteredList);
            }} >Search</button>
        </div>
             <button className="filter- btn"
             onClick={
                () =>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating >4
                    );
                   
                    setListOfRestaurants(filteredList);
                }
             }
             > 
                Top Rated Restaurant</button>
        </div>
    <div className="res-container">
    
    {filteredRestaurant?.map((restaurant) => {
            return
             <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
          })}
    </div>
        </div>
    )
    };
    export default Body ;