import React from "react";

const Film = ({name, url}) => {
    return(
        <div className="film">
            <a href={url}>{name}</a>
        </div>
    )
}

export default Film;