import React from "react";
import "./MyPosts";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";



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

  let onAddpost = () => {
    props.addPost()
    // let text = newPostElement.current.value
    // props.dispatch(addPostActionCreator())
   
    
  }

  let onPostChange = () => {
// debugger
    let text = newPostElement.current.value
    props.updateNewPostText(text)
    // let action = updateNewPostTextActionCreator(text)
    // props.dispatch(action)
  }

  return (
    <div>
      <div>
        <textarea placeholder="ADD POSTS" 
                  onChange={onPostChange} 
                  ref={newPostElement} 
                  value={props.newPostText}/>
      </div>
      
      <button type="button" onClick={ onAddpost }>Add post</button>
      
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
