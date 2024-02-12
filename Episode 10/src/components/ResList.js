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
        <div className="w-52 h-[95%] bg-gray-300 m-4 rounded-lg overflow-hidden hover:scale-105 duration-300">
            <img src={ RES_IMG +
          cloudinaryImageId} alt="resImg"/>
          <h3 className="p-2 font-bold">{name}</h3>
          <h4 className="p-2 font-semibold">{cuisines.join(", ")}</h4>
          <h4 className="p-2 font-semibold">{avgRating}</h4>
          <h4 className="p-2 font-semibold">{costForTwo}</h4>
          <h4 className="p-2 font-semibold">{deliveryTime+" minutes"}</h4>
        </div>
    )
}

export default ResList;