import { RES_IMG } from "../utils/imgLink";

const ResList=(props)=> {
    const {resDetails}=props;

    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla: {deliveryTime}
    }=resDetails?.info;

    return (
        <div className="resCard">
            <img src={ RES_IMG +
          cloudinaryImageId} alt="resImg"/>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime+" minutes"}</h4>
        </div>
    )
}

export default ResList;