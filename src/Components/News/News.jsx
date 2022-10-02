import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import authHoc from "../HOC/authHoc";
import UnderConstruction from "../Common/UnderConstraction";

function News(props) {
    return (
        <div>
            {!props.isConstructing ? <div>News</div> : <UnderConstruction/>}
        </div>
    );
}

let newsState = (state) => {
    return {
        isConstructing: state.app.underConstruction,
        auth: state.auth.isLogged
    }
}

export default compose(connect(newsState, null), authHoc)(News);