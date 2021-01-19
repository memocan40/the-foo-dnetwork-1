

const Origin = ({changeOrigin, origins, users, changeUser}) => {

    const handleOriginClick = (e) => {
        e.preventDefault();
        changeOrigin(e.target.innerText)
    }

    const handleUserClick = (user) => {
        changeUser(user.sys.id)
    }
    console.log(users)

    return(
        <div className="origins">
            <h2>Dishes from:</h2>
            <ul>
                {origins ? origins.map((origin, index) => {
                    return<li key={index} ><a href="https://#" onClick={handleOriginClick}>{origin}</a></li>
                }) : null}
            </ul>
            <h2>Posted by:</h2>
            <ul>
                {users ? users.map((user, index) => {
                    return<li key={index} ><a href="https://#" onClick={(e) => {e.preventDefault() ; handleUserClick(user)}} >{user.fields.name} {user.fields.surname}</a></li>
                }) : null}
            </ul>
        </div>  
    )
}

export default Origin;