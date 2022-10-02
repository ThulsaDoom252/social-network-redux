import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useFormik} from "formik";
import {compose} from "redux";
import {connect} from "react-redux";
import {addMessageCreator} from "../../redux/dialogReducer";
import authHoc from "../HOC/authHoc";
import UnderConstruction from "../Common/UnderConstraction";

const Dialogs = React.memo(props => {
    let {values, handleSubmit, handleChange} = useFormik({
        initialValues: {
            newMessage: ''
        },

        onSubmit: ({newMessage}, {resetForm}) => {
            newMessage === '' ? alert('please enter a message') :
                props.addMessageCreator(newMessage)
            resetForm(values.newMessage)
        }
    })

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messages.map(message => <Message content={message.content}/>)

    return (
        <div className={!props.underConstruction && "dialogs"}>
            {props.underConstruction ? <UnderConstruction/> : <>
                <div className={"dialog-items"}>{dialogsElements}</div>
                <div>
                    {messagesElements}
                    <form onSubmit={handleSubmit}>
                <textarea onChange={handleChange} value={values.newMessage}
                          placeholder={'enter your message'}/>
                        <div>
                            <button type={"submit"}>Add Message</button>
                        </div>
                    </form>
                </div>
            </>}
        </div>
    )

})

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        auth: state.auth.isLogged,
        underConstruction: state.app.underConstruction
    }
}

export default compose(connect(mapStateToProps, {addMessageCreator}), authHoc)(Dialogs)






















