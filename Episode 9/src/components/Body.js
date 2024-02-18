import ResList from "./ResList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useUserOffline from "../utils/useUserOffline";

const Body=()=> {
    const [listOfRes, setListOfRes]=useState([]);
    const [filterRes, setFilterRes]=useState([]);
    const [searchRes, setSearchRes]=useState("");

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData=async()=> {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150");
        const json=await data.json();
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const offlineStatus=useUserOffline();
    if(offlineStatus===false) {
        return <h1>Looks like you are offline! Please check your internet connection.</h1>
    }

    return (listOfRes.length===0)? <Shimmer /> : (
        <div className="body">
            <div className="btn">
                <div className="search">
                    <input type="text" className="searchBox" value={searchRes} onChange={(e)=> {
                        setSearchRes(e.target.value);
                    }}></input>
                    <button className="searchBtn" onClick={()=> {
                        const resultRes=listOfRes.filter((res)=> res.info.name.toLowerCase().includes(searchRes.toLowerCase()));
                        setFilterRes(resultRes);
                    }}>Search</button>
                </div>
                <button className="filterTop" onClick={()=> {
                    const topRatedRes=listOfRes.filter((res)=> res?.info?.avgRating>=4);
                    setFilterRes(topRatedRes);
                }}>Top Restaurant</button>
            </div>
            <div className="resContainer">
                {filterRes.map(restaurant=>(<Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><ResList resDetails={restaurant}/></Link>))}
            </div>
        </div>
    )
}

export default Body;