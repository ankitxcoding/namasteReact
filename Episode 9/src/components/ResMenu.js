import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResMenu=()=> {
    const {resId}=useParams();

    const resInfo=useResMenu(resId);

    if(resInfo===null) return <Shimmer/ >

    const {name, cuisines, costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item=>(<li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"₹"+item?.card?.info?.price/100}</li>))}
            </ul>
        </div>
    )
}

export default ResMenu;