import ResList from "./ResList";
import {resData} from "../utils/resData";
import { useState } from "react";

const Body=()=> {
    const [listOfRes, setListOfRes]=useState(resData);
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