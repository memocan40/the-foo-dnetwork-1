
export default function Dish({ name, pic }) {
  console.log(pic);

  return (
    <div className="dishItem">
      <img src={`https:${pic}`}></img>
      <div>Dish:{name}</div>
    </div>
  );
}

