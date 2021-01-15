import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Dishes from "./views/Dishes";
import Nav from "./views/Nav";

function App() {
  // Define State Variable
  let [dishes, setDishes] = useState();
  let [origin, setOrigin] = useState("Argentina");


  //Here GET all the dishes (API call) - (UseEffect)
 useEffect(()=>{
        axios.get("https://cdn.contentful.com/spaces/ngczliqhmrc5/environments/master/entries?access_token=47FZlMTfDlGKzrXJnRUXR5t1DP70hkaQVUfjt0BO-lI&content_type=dish").then((response)=>{setDishes(response.data.items);

})


    },[])



  //Here GET dishes that match the search (query)

  //Here GET dishes from a specific origin
  useEffect(() => {
    const baseURL = "https://cdn.contentful.com/spaces/ngczliqhmrc5/environments/master/entries?access_token=47FZlMTfDlGKzrXJnRUXR5t1DP70hkaQVUfjt0BO-lI&content_type=dish&fields.origin[match]="


    axios.get(baseURL + origin)
    .then((res) => {
      const fetchedDishes = res.data.items;
      setDishes(fetchedDishes);
    })
    .catch((err) => console.error(err)) 
  }, [origin])
  

  return (
    <div>
      {dishes ?  <Dishes dishesCollection={dishes} /> : null}
    </div>
  );
}

export default App;
