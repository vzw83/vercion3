// import React from "react";

import { connect } from "react-redux"
import Users from "./Users"
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reduser"


let mapStateToProps =(state) => {
  return{
    users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage,

  }
}
let mapDispatchToProps = (dispatch) => {
  return{
    follow: (userId) =>{
      dispatch(followAC(userId))
    },
    unfollow: (userId) =>{
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) =>{
      dispatch(setUsersAC(users))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps  ) (Users)