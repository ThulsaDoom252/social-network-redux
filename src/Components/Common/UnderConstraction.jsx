import React from 'react';
import logo2 from "./progress.gif"

function UnderConstruction(props) {
    return (
        <div className={"under-construction-image-block"}>
            <img className={"under-construction-image"} src={logo2} title={'work in progress'}/>
        </div>
    )
}

export default UnderConstruction;