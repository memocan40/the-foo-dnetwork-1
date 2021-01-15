import Dish from "../components/Dish";

export default function Dishes({ dishesCollection }) {
  return (
    <div className="collection">
      {dishesCollection.map((iteration, index) => (
        <div>
          <Dish
            key={index}
            name={iteration.fields.dishName}
            pic={iteration.fields.image}
          />
        </div>
      ))}
    </div>
  );
}
