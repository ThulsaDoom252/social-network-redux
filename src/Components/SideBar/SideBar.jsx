import {NavLink} from "react-router-dom";
import logo from '../Common/Logo.png'
import {connect} from "react-redux";

const SideBar = (props) => {
    const current = `${props.currentUser}`
    let sideBarItemNightModeStyle = {
        "color": props.nightMode && props.nightModeColors["sidebar-item/header-burger-item"]
    }
    return (
        <div className={"sidebar-wrapper"}>
            <nav
                style={{"background-color": props.nightMode && `${props.nightModeColors["sidebar/header-background"]}`, "border-color": props.nightMode && props.nightModeColors["nightMode-border-color"]}}
                className="sidebar-container" hidden={!props.auth}>
                <img className={"sidebar-logo"} src={logo} alt='logo'/>
                <NavLink style={{"color": props.nightMode && props.nightModeColors["sidebar-item/header-burger-item"]}}
                         to={`/profile/${current}`}
                         className={navData => navData.isActive ? "sidebar-item-active" : "sidebar-item"}>Profile</NavLink>
                <NavLink style={sideBarItemNightModeStyle} to="/dialogs"
                         className={navData => navData.isActive ? "sidebar-item-active" : "sidebar-item"}> Messages </NavLink>
                <NavLink style={sideBarItemNightModeStyle} to="/users"
                         className={navData => navData.isActive ? "sidebar-item-active" : "sidebar-item"}> Users </NavLink>
                <NavLink style={sideBarItemNightModeStyle}
                         to="/News"
                         className={navData => navData.isActive ? "sidebar-item-active" : "sidebar-item"}> News </NavLink>
                <NavLink style={sideBarItemNightModeStyle}
                         to="/music"
                         className={navData => navData.isActive ? "sidebar-item-active" : "sidebar-item"}> Music </NavLink>
                <NavLink style={sideBarItemNightModeStyle}
                         to="/settings"
                         className={navData => navData.isActive ? "sidebar-item-active" : "sidebar-item"}> Settings </NavLink>
            </nav>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.isLogged,
        currentUser: state.auth.id,
        nightMode: state.app.nightMode,
        nightModeColors: state.app.nightModeColors,
    }
}

export default connect(mapStateToProps)(SideBar);