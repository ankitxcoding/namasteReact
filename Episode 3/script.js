import React from "react";
import ReactDOM from "react-dom/client";

const heading=(
    <div id="subroot">
        <h1>This is a h1 tag in subroot div</h1>
    </div>
);

const Title=()=> {
    return (
    <div id="title">
        <h1>This is a h1 tag in title div</h1>
    </div>
    )
};

const Header=()=> {
    return (
        <div id="header">
            {heading}
            <Title />
            <h1>This is a h1 tag in header div</h1>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);