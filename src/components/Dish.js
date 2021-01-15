
export default function Dish({ name, pic }) {

  return (
  <div className="dishItem">
    <img src={`https:${pic}`} alt="this is so" />
    <div>{name}</div>
  </div>
  )
}