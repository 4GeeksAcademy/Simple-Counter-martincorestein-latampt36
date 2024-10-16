//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


//import your own components
// import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

const App = () => (
    <div>
        <SecondsCounter seconds={0} />
    </div>
);

// include your styles into the webpack bundle
import "../styles/index.css";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<App />);

