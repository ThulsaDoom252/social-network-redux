import React from "react";
import {useParams} from "react-router-dom";

const CallTheID = () => {
    let {userID} = useParams()
    return {userID}
}

export  default CallTheID


