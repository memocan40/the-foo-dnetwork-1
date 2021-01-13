import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Dishes from "./views/Dishes";

function App() {
  // Define State Variable
  let [dishes, setDishes] = useState([]);

  //Here GET all the dishes (API call) - (UseEffect)

  //Here GET dishes that match the search (query)

  //Here GET dishes from a specific origin
  return (
    <div>
      <Dishes dishesCollection={dishes} />
    </div>
  );
}

export default App;
