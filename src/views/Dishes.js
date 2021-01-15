import Dish from "../components/Dish";

export default function Dishes({ dishesCollection }) {
  return (
    <div className="collection">
      {dishesCollection.map((dish, index) => (
        <div>
          <Dish
            key={index}
            name={dish.fields.dishName}
            pic={dish.fields.image}
          />
        </div>
      ))}
    </div>
  );
}
