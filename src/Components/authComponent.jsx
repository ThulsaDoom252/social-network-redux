import {connect} from "react-redux";
import authHoc from "./HOC/authHoc";
import Settings from "./Settings/Settings";






export let authComponent = connect()(authHoc(Settings))

