import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=> {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://yt3.googleusercontent.com/8k_iAo27Undep5JHM58haNWs6mJMO4YjuPfWKo12BP-tZYRch8oQZKs67iiGVcD5UF7uXG04Ug=s900-c-k-c0x00ffffff-no-rj" alt="logo"/>
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>Account</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resData=[
    {
        "info": {
        "id": "234903",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Sigra",
        "areaName": "Sigra",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "avgRating": 4,
        "feeDetails": {
        "restaurantId": "234903",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 1900
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 1900
        },
        "parentId": "166",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-12 02:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=234903",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
        },
        {
        "info": {
        "id": "722308",
        "name": "FNP Cakes By Ferns N Petals",
        "cloudinaryImageId": "592167dde0669a2f550bd8d176528e97",
        "locality": "Mahmoorganj",
        "areaName": "Sant Raghuvar Nagar",
        "costForTwo": "₹499 for two",
        "cuisines": [
        "Bakery",
        "Desserts"
        ],
        "avgRating": 3,
        "veg": true,
        "feeDetails": {
        "restaurantId": "722308",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 1900
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 1900
        },
        "parentId": "339638",
        "avgRatingString": "3.0",
        "totalRatingsString": "10+",
        "promoted": true,
        "adTrackingId": "cid=9108567~p=4~eid=0000018b-bca5-be50-3d35-788300b5045a~srvts=1699677060688~45995",
        "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "39 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-11 21:45:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=722308",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
        },
        {
        "info": {
        "id": "545240",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "qhsovlfwepvpmy9mcbbt",
        "locality": "Chhitupura Nagar",
        "areaName": "Sigra",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
        ],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
        "restaurantId": "545240",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 1900
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 1900
        },
        "parentId": "582",
        "avgRatingString": "4.4",
        "totalRatingsString": "100+",
        "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-11 21:45:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=545240",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
        },
        {
        "info": {
        "id": "617594",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "rggmmkjugzuijrln7xo6",
        "locality": "Blw Road",
        "areaName": "Maheshpur",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
        ],
        "avgRating": 4.2,
        "feeDetails": {
        "restaurantId": "617594",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 1900
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 1900
        },
        "parentId": "2456",
        "avgRatingString": "4.2",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-11 23:55:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=617594",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
        },
        {
        "info": {
        "id": "433784",
        "name": "Sweet Truth - Cake and Desserts",
        "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
        "locality": "Manduwadih Road",
        "areaName": "Mahmoorganj",
        "costForTwo": "₹450 for two",
        "cuisines": [
        "Snacks",
        "Bakery",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.3,
        "feeDetails": {
        "restaurantId": "433784",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 2600
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2600
        },
        "parentId": "4444",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-11 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=433784",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
        },
        {
        "info": {
        "id": "104859",
        "name": "Sandesh Sweet And Restaurant",
        "cloudinaryImageId": "w6lsxj3tqixa7rz5s1d9",
        "locality": "Golghar",
        "areaName": "Nadesar",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "North Indian",
        "South Indian",
        "Sweets",
        "Chinese",
        "Snacks"
        ],
        "avgRating": 3.9,
        "veg": true,
        "feeDetails": {
        "restaurantId": "104859",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 2900
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2900
        },
        "parentId": "176904",
        "avgRatingString": "3.9",
        "totalRatingsString": "5K+",
        "promoted": true,
        "adTrackingId": "cid=9352574~p=5~eid=0000018b-bca5-be50-3d35-788400b50569~srvts=1699677060688~45995",
        "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-11 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        }
        ]
        },
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=104859",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
        },
        {
        "info": {
        "id": "717857",
        "name": "Keventers - Milkshakes & Desserts",
        "cloudinaryImageId": "e5262f2380306334c2632f30881d35ba",
        "locality": "Shastri Nagar",
        "areaName": "Sigra",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Beverages",
        "Ice Cream",
        "Desserts",
        "Healthy Food"
        ],
        "avgRating": 4,
        "veg": true,
        "feeDetails": {
        "restaurantId": "717857",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 2400
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2400
        },
        "parentId": "268997",
        "avgRatingString": "4.0",
        "totalRatingsString": "100+",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-11 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=717857",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
        },
        {
        "info": {
        "id": "133791",
        "name": "Cafe Coffee Day",
        "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
        "locality": "JHV Mall",
        "areaName": "Nadesar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food"
        ],
        "avgRating": 3.9,
        "feeDetails": {
        "restaurantId": "133791",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 2900
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2900
        },
        "parentId": "1",
        "avgRatingString": "3.9",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "34 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-11 22:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=133791",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
        },
        {
        "info": {
        "id": "433785",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "juvbgvcbue0pcxndlh4e",
        "locality": "Manduwadih Road",
        "areaName": "Mahmoorganj",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
        "restaurantId": "433785",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 1900
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 1900
        },
        "parentId": "4925",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-11 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=433785",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
        },
        {
        "info": {
        "id": "142004",
        "name": "Shri Narayan Mishthan Bhandar",
        "cloudinaryImageId": "bdozbvtvzeaysio8nxje",
        "locality": "Durgakund",
        "areaName": "Bhelupur",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Sweets",
        "Snacks"
        ],
        "avgRating": 3.7,
        "veg": true,
        "feeDetails": {
        "restaurantId": "142004",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 3400
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 3400
        },
        "parentId": "186711",
        "avgRatingString": "3.7",
        "totalRatingsString": "5K+",
        "promoted": true,
        "adTrackingId": "cid=9199999~p=6~eid=0000018b-bca5-be50-3d35-788500b50673~srvts=1699677060688~45995",
        "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-11 22:30:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "pureveg",
        "imageId": "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=142004",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
        },
        {
        "info": {
        "id": "435680",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Lallapura",
        "areaName": "Chetganj",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 3.6,
        "feeDetails": {
        "restaurantId": "435680",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 1900
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 1900
        },
        "parentId": "721",
        "avgRatingString": "3.6",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-12 02:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=435680",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
        },
        {
        "info": {
        "id": "433780",
        "name": "Faasos - Wraps & Rolls",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "Manduwadih Road",
        "areaName": "Mahmoorganj",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
        "restaurantId": "433780",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 1900
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 1900
        },
        "parentId": "21809",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-11 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=433780",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
        },
        {
        "info": {
        "id": "632989",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "woh5mzrj5cdibm4zdogu",
        "locality": "Ravindrapuri Colony",
        "areaName": "Bhelupur",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 3.4,
        "feeDetails": {
        "restaurantId": "632989",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 3400
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 3400
        },
        "parentId": "4961",
        "avgRatingString": "3.4",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 5.5,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "5.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-12 01:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=632989",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        }
    }
];

const ResList=(props)=> {
    const {resDetails}=props;

    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
    }=resDetails?.info;

    return (
        <div className="resCard">
            <img src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId} alt="resImg"/>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime}</h4>
        </div>
    )
}

const Body=()=> {
    return (
        <div className="body">
            <div className="search">
                <input type="search" id="search" name="Search Here..." />
                <button>Search</button>
            </div>
            <div className="resContainer">
                {resData.map(restaurant=><ResList resDetails={restaurant}/>)}
            </div>
        </div>
    )
}

const Layout=()=> {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);