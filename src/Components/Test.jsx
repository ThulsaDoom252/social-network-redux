import React from "react";
import tc from "./Test.module.css";
import {connect} from "react-redux";
import authHoc from "./HOC/authHoc";


let Test = () => {
    return (
        <div id={tc.container}>
            Bugs to be fixed:
            <div>
            <label>Edit profile button</label>
            <input type={"checkbox"}/>
            </div>
            <div>
                <label>Login reloading</label>
                <input type={"checkbox"}/>
            </div>
            <div>
                <label>Profile content fit DIV</label>
                <input type={"checkbox"}/>
            </div>
            <div>
                <label>Edit profile UI</label>
                <input type={"checkbox"}/>
            </div>
            <div>
                <label>Edit users UI</label>
                <input type={"checkbox"}/>
            </div>
            <div>
                <label>Fix initial user loading</label>
                <input type={"checkbox"}/>
            </div>
        </div>
    )
}


export default Test
// export default connect()(authHoc(Test))