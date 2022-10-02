import {getUsers as getUsersTC, followTC, unFollowTC} from "../../redux/usersReducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import "./Container.css"
import Fetching from "../Common/Fetching";
import authHoc from "../HOC/authHoc";

class ApiContainer extends React.Component {
    componentDidMount() {
     this.props.getUsersTC(this.props.thisPage, this.props.pageSize)
    }

    onPageChanged = (currentPage) => {
     this.props.getUsersTC(currentPage, this.props.pageSize)
    }

    render() {
      return  <>
          <Fetching isFetching = {this.props.isFetching}/>
        <Users {...this.props}
                     onPageChanged = {this.onPageChanged}/>
      </>
    }

}

let mapStateToProps = (state) => {
    return {
        auth: state.auth.isLogged,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        thisPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

const UsersContainer = connect(mapStateToProps, {getUsersTC, followTC, unFollowTC})(authHoc(ApiContainer))


export default UsersContainer












































