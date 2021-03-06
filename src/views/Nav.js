import Search from "../components/Search";
import Origin from "../components/Origin";

const Nav = ({
  changeQuery,
  changeOrigin,
  origins,
  users,
  changeUser,
  allDishesHandler,
  dishesCount,
}) => {
  return (
    <div className="sideBar">
      <div className="logo">
        THE FOO___D <br></br> NETWORK
      </div>
      <p id="openStatement">
        We have <span> {dishesCount ? ` ${dishesCount}` : ""} </span> dishes
        from <span> {origins.length} </span> cultures, and by{" "}
        <span> {users.length}</span> food enthusiasts.
      </p>
      <Search changeQuery={changeQuery} />
      <Origin
        changeOrigin={changeOrigin}
        origins={origins}
        users={users}
        changeUser={changeUser}
        allDishesHandler={allDishesHandler}
      />
      {/* <div className="intro">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div> */}
    </div>
  );
};

export default Nav;
