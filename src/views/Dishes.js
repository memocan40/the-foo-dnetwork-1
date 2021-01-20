import Dish from "../components/Dish";


export default function Dishes({ dishesCollection }) {
  

  return (
    <div className="collection">
      {dishesCollection.map((dish, index) => (
          <Dish
            key={index}
            name={dish.name}
            description={dish.description}
            pictureURL={dish.pictureURL}
            origin={dish.origin}
            user={dish.user}
          />
      ))}
    </div>
  );
}
