import ResList from "./ResList";
import { useEffect, useState } from "react";

const Body=()=> {
    const [listOfRes, setListOfRes]=useState([]);

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData=async()=> {
        const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=25.3176452&lng=82.9739144");
        const json=await data.json();
        setListOfRes(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div className="body">
            <div className="search">
                <button className="btn" onClick={()=>{
                    const topRatedRes=listOfRes.filter((res)=> res.info.avgRating>=4);
                    setListOfRes(topRatedRes);
                }}>Top Restaurant</button>
            </div>
            <div className="resContainer">
                {listOfRes.map(restaurant=><ResList key={restaurant.info.id} resDetails={restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;