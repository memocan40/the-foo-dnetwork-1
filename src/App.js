import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Dishes from "./views/Dishes";
import Search from "./components/Search";

function App() {
  // Define State Variable
  let [dishes, setDishes] = useState([]);
  let [origin, setOrigin] = useState("Ethiopia");

  //Here GET all the dishes (API call) - (UseEffect)

  //Here GET dishes that match the search (query)
  // let [search, setSearch] = useState("");
  let [query, setQuery] = useState("");

  useEffect(() => {
    const baseURL =
      "https://cdn.contentful.com/spaces/ngczliqhmrc5/environments/master/entries?access_token=47FZlMTfDlGKzrXJnRUXR5t1DP70hkaQVUfjt0BO-lI&content_type=dish&query=";

    axios
      .get(baseURL + query)
      .then((res) => {
        const result = res.data.items;
        setDishes(result);
        console.log(query);
        console.log(result);
      })
      .catch((err) => console.error(err));
  }, [query]);

  //Here GET dishes from a specific origin

  return (
    <div>
      <Search changeQuery={(query) => setQuery(query)} />

      <Dishes dishesCollection={dishes} />
    </div>
  );
}

export default App;
