import { useEffect } from "react";

const ResMenu=()=> {

    useEffect(()=> {

    }, []);

    const resMenuApi="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=0&lng=0&restaurantId=87263";

    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Chicken</li>
                <li>Paneer</li>
                <li>Burger</li>
            </ul>
        </div>
    )
}

export default ResMenu;