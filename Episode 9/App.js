import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Account from "./src/components/Account";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import ResMenu from "./src/components/ResMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout=()=> {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/account",
                element: <Account />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:resId",
                element: <ResMenu />
            }
        ],
        errorElement: <Error />
    }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);