import React from "react";
import "./MyPosts";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = (props) => {
  let postsData = [
    { id: 1, message: "привет" ,likeCount:12},
    { id: 2, message: "как дела?" ,likeCount:25},
    { id: 3, message: "Чем занимаешься?" ,likeCount:0},
    { id: 4, message: "изучаю props" ,likeCount:112},
    { id: 5, message: "YO" ,likeCount:12},
  ];
  return (
    <div>
      <div>
        <textarea placeholder="ADD POSTS"></textarea>
      </div>
      <button>Жмиии</button>
      <div>
        <h3>new post</h3>
      </div>
      <div className={s.posts}>
        <Post message={postsData[0].message} likeCount={postsData[0].likeCount} />
        <Post message={postsData[1].message} likeCount={postsData[1].likeCount} />
        <Post message={postsData[2].message} likeCount={postsData[2].likeCount} />
        <Post message={postsData[3].message} likeCount={postsData[3].likeCount} />
        <Post message={postsData[4].message} likeCount={postsData[4].likeCount} />
     
      </div>
    </div>
  );
};
export default MyPosts;
