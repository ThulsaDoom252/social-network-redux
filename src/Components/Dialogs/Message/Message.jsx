import React from "react";
import D from './../Dialogs.module.css'



const Message = (props) => {

    let content = props.content;
    return (
        <div className={D.message}>
            <div className={D.message}>{content}</div>
        </div>

    )
}

export default Message

