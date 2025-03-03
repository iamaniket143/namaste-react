import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
    <div className="app">
        <Header />
        {/* if path is / then Body
            if path is /about then About
            if path is /contact then Contact
        */}
        <Outlet />
        {/* <Body /> */}
    </div>
    )
}

// createBrowserRouter takes list of path and returns a router
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:  "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />,
    },
    // {
    //     path: "/about",
    //     element: <About />,
    // },
    // {
    //     path: "/contact",
    //     element: <Contact />,
    // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

// Components
// Header
    // Logo
    // Nav Items
// Body
    // Search
    // Restaurant Container
        // Restaurant Card
            // image
            // Name of Restaurant, Star rating, cuisines, delivery time
// Footer
    // Copyright
    // Links
    // Contact