import dialogsReduser from "./dialogs-reducer";
import profileReduser from "./profile-reducer";
import sidebarReduser from "./sidebar-reducer";





let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "привет", likeCount: 12 },
        { id: 2, message: "как дела?", likeCount: 25 },
      ],
      newPostText: "it-kamasutra.com",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Вова" },
        { id: 2, name: "Оля" },
        { id: 3, name: "Дима" },
        { id: 4, name: "Андрей" },
        { id: 5, name: "Семён" },
      ],
      messages: [
        { id: 1, message: "привет" },
        { id: 2, message: "как твои дела?" },
        { id: 3, message: "Чем занимаешься?" },
        { id: 4, message: "YO" },
        { id: 5, message: "YO" },
      ],
      newMessageBody: ""
    },
    sidebar:{}
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likeCount: 10,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   // debugger
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {

    this._state.profilePage = profileReduser(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReduser(this._state.sidebar, action)

    this._callSubscriber(this._state);
   
  }
  
};





export default store;
window.state = store;

// let rerenderEntireTree = () => {
//   console.log('State changed');
// }

// let state = {
//   profilePage: {
//     posts: [
//       { id: 1, message: "привет", likeCount: 12 },
//       { id: 2, message: "как дела?", likeCount: 25 },
//     ],
//     newPostText:'it-kamasutra.com'
//   },
//   dialogsPage: {
//     messages: [
//       { id: 1, message: "привет" },
//       { id: 2, message: "как твои дела?" },
//       { id: 3, message: "Чем занимаешься?" },
//       { id: 4, message: "YO" },
//       { id: 5, message: "YO" },
//     ],
//     dialogs: [
//       { id: 1, name: "Вова" },
//       { id: 2, name: "Оля" },
//       { id: 3, name: "Дима" },
//       { id: 4, name: "Андрей" },
//       { id: 5, name: "Семён" },
//     ],
//   },
// };

// export let addPost = () => {

//   const newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likeCount: 10
//   }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// }

// export const updateNewPostText = (newText) => {
//   // debugger
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer
// }

// export default state;
// window.state = state
