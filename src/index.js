import React from "react";
import store from "./redux/State";
import  ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import state from "./redux/State";


// addPost("fgfg");

// let posts = [
//   { id: 1, message: "привет" ,likeCount:12},
//   { id: 2, message: "как дела?" ,likeCount:25},
//   { id: 3, message: "Чем занимаешься?" ,likeCount:0},
//   { id: 4, message: "изучаю props" ,likeCount:112},
//   { id: 5, message: "YO" ,likeCount:12},
//   { id: 6, message: "YO" ,likeCount:1112},
// ];
// let dialogs = [
//   { id: 1, name: "Вова" },
//   { id: 2, name: "Оля" },
//   { id: 3, name: "Дима" },
//   { id: 4, name: "Андрей" },
//   { id: 5, name: "Семён" },
// ];

// let messages = [
//   { id: 1, message: "привет" },
//   { id: 2, message: "как твои дела?" },
//   { id: 3, message: "Чем занимаешься?" },
//   { id: 4, message: "YO" },
//   { id: 5, message: "YO" },
// ];

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

reportWebVitals();