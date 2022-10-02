import React from "react";
import D from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={"dialogs" + " " + "active"}><NavLink to={path}>{props.name}</NavLink></div>
    )
}


export default DialogItem