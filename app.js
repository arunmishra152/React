import React from 'react'
import ReactDOM  from 'react-dom/client';

const heading = React.createElement(
    "div",
    {id:"heading"},
    [
        React.createElement("h1",{},"Hello H1"),
        React.createElement("h2",{},"Hello H2")
    ]
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);