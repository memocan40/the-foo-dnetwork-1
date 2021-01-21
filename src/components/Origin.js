const Origin = ({
  changeOrigin,
  origins,
  users,
  changeUser,
  allDishesHandler,
}) => {
  const handleOriginClick = (e) => {
    e.preventDefault();
    changeOrigin(e.target.innerText);
  };

  const handleUserClick = (userId) => {
    changeUser(userId);
  };

  return (
    <div className="origins">
      <h2 onclick={allDishesHandler}>All Dishes</h2>
      <h2>Dishes from:</h2>
      <ul>
        {origins
          ? origins.map((origin, index) => {
              return (
                <li key={index}>
                  <a href="https://#" onClick={handleOriginClick}>
                    {origin}
                  </a>
                </li>
              );
            })
          : null}
      </ul>
      <h2>Posted by:</h2>
      <ul>
        {users
          ? users.map((user, index) => {
              return (
                <li key={index}>
                  <a
                    href="https://#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleUserClick(user.sys.id);
                    }}
                  >
                    {user.fields.name} {user.fields.surname}
                  </a>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Origin;
