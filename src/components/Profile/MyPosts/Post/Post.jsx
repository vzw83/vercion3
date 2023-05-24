import React from "react";
import "./Post";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://oir.mobi/uploads/posts/2021-05/1620738423_4-oir_mobi-p-smeshnie-akuli-zhivotnie-krasivo-foto-5.jpg"
        alt="smile_img"
      />
      {props.message}
      <div>
        <span>Like {props.likeCount}</span>
      </div>
    </div>
  );
};
export default Post;
