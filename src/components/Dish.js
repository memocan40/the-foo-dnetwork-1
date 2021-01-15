
export default function Dish({ name, pic }) {

  return (
    <div className="dishItem">
      <img src={`https:${pic}`}></img>
      <div>{name}</div>
    </div>
  );
}

