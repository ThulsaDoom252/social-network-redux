import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {currentUserDataTC, getStatusTC, setAvatarTC, setUserTC, updateStatusTC} from "../../redux/profileReducer";
import authHoc from "../HOC/authHoc";
import withRouter from "../HOC/withRouter";





class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if(!userId) {
            userId = `${this.props.Id}`
        }
        let u2 = Object.values(this.props.router.params)
        this.props.setUserTC(userId)
        this.props.getStatusTC(userId)
        this.props.currentUserDataTC(this.props.Id)
    }


    render() {
        return (
            <>
            <Profile {...this.props}   status = {this.props.status} getStatus = {this.props.getStatusTC} setUser = {this.props.setUserTC} userId = {this.props.router.params.userId} updateStatus = {this.props.updateStatusTC}/>
            </>
        )
    }
}


let ProfileApi = connect()(authHoc(ProfileContainer))



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    auth: state.auth.isLogged,
    Id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    status: state.profilePage.status
})

export default connect(mapStateToProps, {setUserTC, getStatusTC, updateStatusTC, currentUserDataTC})( withRouter(ProfileApi))

