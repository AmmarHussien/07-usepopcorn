import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating fullColor="Blue" onSetRating={setMovieRating} />
//       <p>this movie was reted {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={10}
      fullColor="red"
      strokeColor="blue"
      textColor="orange"
      size={50}
    />
    <StarRating className="test" />
    <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating defaultRating={3} />

    <StarRating maxRating={20} defaultRating={3} />

    <Test /> */}
  </React.StrictMode>
);
