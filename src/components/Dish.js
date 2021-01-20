export default function Dish({ name, description, pictureId, origin, user }) {

  return (
    <div >
      <div>
        <p>{name}</p>
        <p>{user.username}</p>
      </div>
    </div>
  );
}
