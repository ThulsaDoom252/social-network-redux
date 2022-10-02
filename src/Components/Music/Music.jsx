import React from "react";
import UnderConstruction from "../Common/UnderConstraction";
import {connect} from "react-redux";
import authHoc from "../HOC/authHoc";

const Music = (props) => {
    return (
        <>
            {props.underConstruction ? <UnderConstruction/> : <div>Music</div>}
        </>
    )
}

let musicState = (state) => {
    return {
        auth: state.auth.isLogged,
        underConstruction: state.app.underConstruction
    }
}


export default  connect(musicState) (authHoc(Music))
