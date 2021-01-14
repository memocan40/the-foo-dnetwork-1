import DishTest from "../components/DishTest";

export default function DishesTest({ dishesCollection }) {
  return (
    <div className="collection">
      {dishesCollection.map((iteration, index) => (
        <div>
          <DishTest
            key={index}
            name={iteration.fields.dishName}
            pic={iteration.fields.image}
          />
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
