import React from "react";
import "./MyPosts";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { type } from "@testing-library/user-event/dist/type";

const MyPosts = (props) => {
  // let posts = [
  //   { id: 1, message: "привет" ,likeCount:12},
  //   { id: 2, message: "как дела?" ,likeCount:25},
  //   { id: 3, message: "Чем занимаешься?" ,likeCount:0},
  //   { id: 4, message: "изучаю props" ,likeCount:112},
  //   { id: 5, message: "YO" ,likeCount:12},
  //   { id: 6, message: "YO" ,likeCount:1112},
  // ];
  let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)

  let newPostElement = React.createRef()

  let addPost = () => {

    // let text = newPostElement.current.value
    props.dispatch({type: 'ADD-POST'})
   
    
  }

  let onPostChange = () => {
// debugger
    let text = newPostElement.current.value
    let action = {type: 'APDATE-NEW-POST-TEXT', newText: text}
    props.dispatch(action)
  }

  return (
    <div>
      <div>
        <textarea placeholder="ADD POSTS" 
                  onChange={onPostChange} 
                  ref={newPostElement} 
                  value={props.newPostText}/>
      </div>
      
      <button type="button" onClick={ addPost }>Add post</button>
      
      <div>
        <h3>new post</h3>
      </div>
      <div className={s.posts}>
      {postsElements}
     
      </div>
    </div>
  );
};
export default MyPosts;
