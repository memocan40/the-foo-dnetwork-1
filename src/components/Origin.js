import {useState} from 'react';

const Origin = ({changeOrigin, origins}) => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
        changeOrigin(e.target.innerText)
    }

    return(
        <div className="origins">
        <h2>Dishes from:</h2>
            <ul>
                {origins && origins.map((origin, index) => {
                    return<li><a href="" key={index} onClick={handleClick}>{origin}</a></li>
                })}
            </ul>
        </div>  
    )
}

export default Origin;