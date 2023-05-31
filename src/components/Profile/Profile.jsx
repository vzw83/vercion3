import React from "react";
import "./Profile";
// import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const  Profile = (props) => {
  // let posts = [
  //   { id: 1, message: "привет" ,likeCount:12},
  //   { id: 2, message: "как дела?" ,likeCount:25},
  //   { id: 3, message: "Чем занимаешься?" ,likeCount:0},
  //   { id: 4, message: "изучаю props" ,likeCount:112},
  //   { id: 5, message: "YO" ,likeCount:12},
  //   { id: 6, message: "YO" ,likeCount:1112},
  // ];
  return (
    <div>
      <ProfileInfo />

      <MyPosts  posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} 
                />
    </div>
  );
};

export default Profile;
