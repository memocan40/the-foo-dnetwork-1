import Search from "../components/Search";
import Origin from "../components/Origin";

const Nav = ({changeQuery, changeOrigin}) => {

    return (
    <div className="sideBar">
      <Search changeQuery={changeQuery} />
      <Origin changeOrigin={changeOrigin} />
    </div>
    )
}

export default Nav;