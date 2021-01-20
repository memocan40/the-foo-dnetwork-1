import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Dishes from "./views/Dishes";
import Nav from "./views/Nav";

function App() {
  // Define State Variable
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState("");
  let [origins, setOrigins] = useState([]);
  let [origin, setOrigin] = useState("");
  let [dishes, setDishes] = useState();
  let [query, setQuery] = useState("");
  let [images, setImages] = useState([]);


  //Here GET dishes that match the search (query)
  useEffect(() => {
    const baseURL =
      "https://cdn.contentful.com/spaces/ngczliqhmrc5/environments/master/entries?access_token=47FZlMTfDlGKzrXJnRUXR5t1DP70hkaQVUfjt0BO-lI&content_type=dish&query=";

    axios
      .get(baseURL + query)
      .then((res) => {
        const result = res.data.items;
        setDishes(result);
      })
      .catch((err) => console.error(err));
  }, [query]);
  
  //Here GET dished from a specific user
  useEffect(() => {
    const baseURL =
    "https://cdn.contentful.com//spaces/ngczliqhmrc5/environments/master/entries?access_token=47FZlMTfDlGKzrXJnRUXR5t1DP70hkaQVUfjt0BO-lI&content_type=dish&fields.author.sys.contentType.sys.id=user&fields.author.sys.id=";
    
    axios
    .get(baseURL + user)
    .then((res) => {
      const result = res.data.items;
      setDishes(result);
    })
    .catch((err) => console.error(err));
  }, [user]);

  //Here GET dishes from a specific origin

  useEffect(() => {
    const baseURL =
      "https://cdn.contentful.com/spaces/ngczliqhmrc5/environments/master/entries?access_token=47FZlMTfDlGKzrXJnRUXR5t1DP70hkaQVUfjt0BO-lI&content_type=dish&fields.origin[match]=";
    axios
      .get(baseURL + origin)
      .then((res) => {
        const fetchedDishes = res.data.items;
        setDishes(fetchedDishes);
      })
      .catch((err) => console.error(err));
  }, [origin]);

  //Here GET all the dishes (API call) - (UseEffect)
  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/ngczliqhmrc5/environments/master/entries?access_token=47FZlMTfDlGKzrXJnRUXR5t1DP70hkaQVUfjt0BO-lI&content_type=dish&order=fields.dishName"
      )
      .then((response) => {
        setDishes(response.data.items);
        setUsers(response.data.includes.Entry);
        // console.log(response)
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(()=>{
    axios
    .get("https://api.unsplash.com/photos/?client_id=4J0aQFt0da187Dy7vGsol1xFdpG37WzNgwEDrrj6skc&query=food&per_page=21")
    .then((response)=>{
      response.data.map((resImage)=>{
        // setImages([...images, resImage.urls.regular])
        images.push(resImage.urls.regular);
      })
    })
    .catch(err => console.error(err))
  },[])
    
   if(dishes) {
     dishes.map((dish) => {
       if (!origins.includes(dish.fields.origin)) setOrigins([...origins, dish.fields.origin]);
       return null;
     })
   }

   
  return (
    <div className="wrapper">
      <Nav 
        changeQuery={(query) => setQuery(query)} 
        changeOrigin={(origin) => {setOrigin(origin)}} 
        changeUser={(user) => setUser(user)}
        origins={origins} 
        users={users} 
      />
      {dishes ? <Dishes dishesCollection={dishes} images={images}/> : null}
    </div>
  );
}

export default App;
