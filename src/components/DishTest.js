export default function DishTest({ name, pic }) {
  console.log(pic);

  return (
    <div>
      <img src={`https:${pic}`}></img>

      <div>Dish:{name}</div>
    </div>
  );
}
