import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"; 

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

const AppLayout = () => {
    return (
    <div className="app">
        <Header />
        <Body />
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);