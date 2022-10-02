import React from 'react';
import {connect} from "react-redux";

function About(props) {
    return (
        <div className={"about-block"}>
            <div style={{"color": props.nightMode && props.nightModeColors["nightMode-text-color"]}}>
                <hr/>
                Developed by ThulsaDoom
                <div className={"about-block-version"}>
                    v 1.0.0
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        nightMode: state.app.nightMode,
        nightModeColors: state.app.nightModeColors
    }
}

export default connect(mapStateToProps)(About);