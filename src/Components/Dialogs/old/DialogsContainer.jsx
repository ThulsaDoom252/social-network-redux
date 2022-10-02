import {addMessageCreator} from "../../redux/dialogReducer";
import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import authHoc from "../HOC/authHoc";
import {compose} from "redux";









let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        auth: state.auth.isLogged,
        underConstruction: state.app.underConstruction
    }
}





const DialogsContainer = compose(connect (mapStateToProps, {addMessageCreator}), authHoc) (Dialogs)

export default DialogsContainer












