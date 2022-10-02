import {connect} from "react-redux";
import Music from "./Music";
import authHoc from "../HOC/authHoc";


let state = (state) => {
    return {
        auth: state.auth.isLogged,
        underConstruction: state.app.underConstruction
    }
}


const MusicContainer = connect(state) (authHoc(Music))


export default MusicContainer