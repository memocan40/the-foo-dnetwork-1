import Dish from "../components/Dish";

export default function Dishes({ dishesCollection }) {
  
  return (
    <div className="collection">
      {dishesCollection.map((dish, index) => (
          <Dish
            key={index}
            name={dish.name}
            description={dish.description}
            pictureId={dish.pictureId}
            origin={dish.origin}
            user={dish.user}
          />
      ))}
    </div>
  );
}
