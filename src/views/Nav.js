import Search from "../components/Search";
import Origin from "../components/Origin";


const Nav = ({changeQuery, changeOrigin, origins, users, changeUser}) => {
  console.log(origins)
    return (
    <div className="sideBar">
      <div className="logo">
        THE FOO___D <br></br> NETWORK
      </div>
      <Search changeQuery={changeQuery} />
      <Origin changeOrigin={changeOrigin} origins={origins} users={users} changeUser={changeUser}/>
    </div>
  );
};

export default Nav;
