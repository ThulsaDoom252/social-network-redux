import React from "react";
import authHoc from "../HOC/authHoc";
import {connect} from "react-redux"
import {compose} from "redux";
import {nightModeAC, underConstructionAC} from "../../redux/appReducer";
import About from "../Common/About";

const Settings = (props) => {
    let relay = () => {
        if (props.underConstruction) {
            return props.underConstructionAC(false)
        } else {
            return props.underConstructionAC(true)
        }
    }

    let nightModeRelay = () => {
        if (props.nightMode) {
            return props.nightModeAC(false)
        } else {
            return props.nightModeAC(true)
        }
    }

    return (
        <div>
            <div style = {{"background-color": props.nightMode && props.nightModeColors["nightMode-container-block"], "color":props.nightMode && props.nightModeColors["nightMode-text-color"], "box-shadow": props.nightMode && props.nightModeColors["profile-block-border-shadow"]}} className={"settings-container"}>
                <div className={"settings-title"} style={{"margin":"0 auto", "width":"100px"}}>Settings</div>
                <div className={"settings-show-block 'form-check form-switch"}>
                    <label className={"settings-show-label"} htmlFor={'flexSwitchCheckDefault'}>Show blocks that under
                        construction</label>
                    <input className={"settings-show-checkBox form-check-input"}
                           id="flexSwitchCheckDefault"
                           defaultChecked={!props.underConstruction} onChange={relay} type={"checkbox"}/>
                </div>
                <div className={"settings-nightMode-block 'form-check form-switch"}>
                    <label className={"settings-nightMode-label"}>Enable nightmode</label>
                    <input className={"settings-nightMode-checkBox form-check-input"}
                           id="flexSwitchCheckDefault2"
                           defaultChecked={props.nightMode} onChange={nightModeRelay} type={"checkbox"}/>
                </div>
            </div>
            <About/>
        </div>

    )
}

let settingsState = (state) => {
    return {
        auth: state.auth.isLogged,
        underConstruction: state.app.underConstruction,
        nightMode: state.app.nightMode,
        nightModeColors: state.app.nightModeColors

    }
}


export default compose(connect(settingsState, {nightModeAC, underConstructionAC}), authHoc)(Settings)