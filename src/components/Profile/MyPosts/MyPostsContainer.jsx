// import React from "react";
import "./MyPosts";
// import s from "./MyPosts.module.css";
// import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext.js!!!!";
import { connect } from "react-redux";

// const MyPostsContainer = () => {
//   // let state = props.store.getState();

//   // let posts = [
//   //   { id: 1, message: "привет" ,likeCount:12},
//   //   { id: 2, message: "как дела?" ,likeCount:25},
//   //   { id: 3, message: "Чем занимаешься?" ,likeCount:0},
//   //   { id: 4, message: "изучаю props" ,likeCount:112},
//   //   { id: 5, message: "YO" ,likeCount:12},
//   //   { id: 6, message: "YO" ,likeCount:1112},
//   // ];
//   // let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)

//   // let newPostElement = React.createRef()

//   // let addPost = () => {
//   // props.addPost()
//   // let text = newPostElement.current.value
//   // props.store.dispatch(addPostActionCreator());
//   // };

//   // let onPostChange = (text) => {
//   // debugger
//   // let text = newPostElement.current.value
//   // props.updateNewPostText(text)
//   // let action = updateNewPostTextActionCreator(text);
//   // props.store.dispatch(action);
//   // };

//   // return (
//   // <div>
//   //   <div>
//   //     <textarea placeholder="ADD POSTS"
//   //               onChange={onPostChange}
//   //               ref={newPostElement}
//   //               value={props.newPostText}/>
//   //   </div>

//   //   <button type="button" onClick={ addPost }>Add post</button>

//   //   <div>
//   //     <h3>new post</h3>
//   //   </div>
//   //   <div className={s.posts}>
//   //   {postsElements}

//   //   </div>
//   // </div>
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };
//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
//   // );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: ()=>{dispatch(addPostActionCreator());}
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
