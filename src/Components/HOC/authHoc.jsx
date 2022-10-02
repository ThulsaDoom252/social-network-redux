import React from "react";
import {Navigate} from "react-router-dom";

let authHoc = (Component) => {
    return (props) => {
        if (!props.auth) {
            return <Navigate to="/mainlogin"/>
        } else {
            return <Component {...props}/>
        }
    }
}

export default authHoc