import React from 'react';
import notFound from "./not Found.jpg"
import authHoc from "../HOC/authHoc";
import {compose} from "redux";
import {connect} from "react-redux";

const NotFoundPage = (props) => {
    return (
        <div className="not-found-container">
            <div>
                <img className="not-found-image" src={notFound}/>
            </div>
            <b className="not-found-text">Not found</b>
        </div>
    );
}

let loginCheck = (state) => {
    return {
        auth: state.auth.isLogged
    }
}

export default compose(connect(loginCheck, null), authHoc)(NotFoundPage);
