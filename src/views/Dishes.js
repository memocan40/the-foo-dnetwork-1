import Dish from "../components/Dish";
export default function Dishes({dishesCollection}) {
  return (
    <div>
    {dishesCollection.map((iteration,index)=>{return(<div><Dish name={iteration.fields.dishName}/></div>)})}
      
      
      
    </div>
  );
}
