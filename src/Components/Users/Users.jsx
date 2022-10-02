import React, {useEffect} from "react";
import anonymous from "../Common/Anonymous.jpg"
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";
import {connect} from "react-redux";
import {followTC, getUsers as getUsersTC, unFollowTC} from "../../redux/usersReducer";
import authHoc from "../HOC/authHoc";
import {compose} from "redux";
import Fetching from "../Common/Fetching";
import About from "../Common/About";

let Users = ({thisPage, totalCount, pageSize, ...props}) => {
    useEffect(() => {
        props.getUsersTC(props.thisPage, props.pageSize)
    }, [])
    return (
        <div>
            <Fetching isFetching={props.isFetching}/>
            <div style={{"color":props.nightMode && props.nightModeColors["nightMode-text-color"]}} className={"users-page-title"}>USERS:</div>
            <Paginator nightMode = {props.nightMode} nightModeColors = {props.nightModeColors} portionSize={10} currentPage={thisPage}
                       onPageChanged={(currentPage) => props.getUsersTC(currentPage, props.pageSize)}
                       totalItemsCount={totalCount} pageSize={pageSize}/>
            <div style={{"background-color":props.nightMode && props.nightModeColors["nightMode-container-block"], "box-shadow": props.nightMode && props.nightModeColors["profile-block-border-shadow"]}} className={"users-page-main-users-container"}>
                <div className={"users-page-user-block-container"}>
                    <div className={"users-page-users-grid"}>
                        {props.users.map(u =>
                            <div className={props.nightMode ? "users-page-user-block-nightMode users-page-user-block" : "users-page-user-block"}>
                                <div key={u.id}>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img className={"users-page-avatar-small"}
                                             src={u.photos.small != null ? u.photos.small : anonymous}/>
                                    </NavLink>
                                    <div style={{"background-color":props.nightMode && props.nightModeColors["header-slogan-title/welcome-label"], "color":props.nightMode && props.nightModeColors["nightMode-text-color"]}} className={"users-page-user-name"}>{u.name}</div>
                                    <div style={{"background-color":props.nightMode && props.nightModeColors["sidebar/header-background"], "color":props.nightMode && props.nightModeColors["nightMode-text-color"]}} className={"users-page-user-status"}>{u.status || 'No status'}</div>
                                    {u.isFollow ?
                                        <button className={"users-page-follow-button"}
                                                disabled={props.followingProgress.some(id => id === u.id)}
                                                onClick={() => {
                                                    props.unFollowTC(u.id)
                                                }}>Unfollow</button>
                                        :
                                        <button className={"users-page-follow-button"}
                                                disabled={props.followingProgress.some(id => id === u.id)}
                                                onClick={() => {
                                                    props.followTC(u.id)
                                                }}>Follow</button>}
                                    <hr style={{"color":props.nightMode && props.nightModeColors["nightMode-text-color"]}}/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <About/>
        </div>)
}

let usersState = (state) => {
    return {
        auth: state.auth.isLogged,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        thisPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
        nightMode: state.app.nightMode,
        nightModeColors: state.app.nightModeColors
    }
}

export default compose(connect(usersState, {getUsersTC, followTC, unFollowTC}), authHoc)(Users)




















