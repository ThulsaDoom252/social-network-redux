import React, {Component} from "react";
import U from './Users.module.css'
import * as axios from "axios";
import avatar from "../files/avatar.jpg"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.thisPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }
    onPageChanged(page) {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        let pagesCount =  Math.ceil (this.props.totalCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (<div className={U.Container}>
            <div>
                {pages.map(p => {
                    return  <span><button className={this.props.thisPage === p && U.selected}
                                          onClick = {(e) => this.onPageChanged(p)}>{p}</button></span>
                })}
                <div className={U.title}>USERS:</div>
            </div>
            {this.props.users.map(u =>
                <div className={U.userBlock}>
                    <div key={u.id}>
                        <img className={U.img} src={u.photos.small != null ? u.photos.small : avatar}/>
                    </div>
                    <div>
                        {u.isFollow ? <button className={U.follow} onClick={() => {
                                this.props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button className={U.follow} onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                    <div className={U.frame}>
                        <div className={U.username}>{u.name}</div>
                        <div className={U.content}>{u.status}</div>
                        <div className={U.country}>Country</div>
                        <div className={U.city}>City</div>
                    </div>
                </div>
            )}
        </div>)
    }
}

export default Users


