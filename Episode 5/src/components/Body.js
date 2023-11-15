import ResList from "./ResList";
import {resData} from "../utils/resData";

const Body=()=> {
    return (
        <div className="body">
            <div className="search">
                <input type="search" id="search" name="Search Here..." />
                <button>Search</button>
            </div>
            <div className="resContainer">
                {resData.map(restaurant=><ResList key={restaurant.info.id} resDetails={restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;