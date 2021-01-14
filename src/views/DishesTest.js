import Dish from "../components/Dish";

export default function DishesTest({ dishesCollection }) {
  return (
    <div className="collection">
      {dishesCollection.map((iteration, index) => (
        <div>
          <Dish key={index} name={iteration.fields.dishName} />
        </div>
      ))}
    </div>
  );
}

// return (
//     <div className="collection">
//           {dishesCollection.map((iteration, index) => (
//           if (iteration.fields.dishName != "") {
//         <div>
//           <Dish key={index} name={iteration.fields.dishName} />
//         </div>}

//           ))}
//     </div>
//   );
