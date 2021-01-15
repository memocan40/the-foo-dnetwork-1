import Dish from "../components/Dish";

export default function Dishes({dishesCollection}) {
  // const filteredDishes = dishes.map((dish) => {
  //   console.log(dish);
  // })

  return (
    <div className="collection">
      {dishesCollection.map((dish, index) => (
          <Dish
            key={index}
            name={dish.fields.dishName}
          />  
      ))}
    </div>
  );
}
