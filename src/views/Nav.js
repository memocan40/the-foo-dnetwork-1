import Search from "../components/Search";
import Origin from "../components/Origin";

const Nav = ({changeQuery, changeOrigin, origins, users, changeUser}) => {

    return (
    <div className="sideBar">
      <Search changeQuery={changeQuery} />
      <Origin changeOrigin={changeOrigin} origins={origins} users={users} changeUser={changeUser}/>
    </div>
    )
}

export default Nav;