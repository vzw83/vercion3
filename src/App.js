import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
// import store from "./redux/State";
// import { addPost } from "./redux/State";

const App = (props) => {
  // let posts = [
  //   { id: 1, message: "привет" ,likeCount:12},
  //   { id: 2, message: "как дела?" ,likeCount:25},
  //   { id: 3, message: "Чем занимаешься?" ,likeCount:0},
  //   { id: 4, message: "изучаю props" ,likeCount:112},
  //   { id: 5, message: "YO" ,likeCount:12},
  //   { id: 6, message: "YO" ,likeCount:1112},
  // ];
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                store={props.store}
                // state={props.state.dialogsPage}
                // messages={props.state.dialogsPage.messages}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile profilePage ={props.state.profilePage} 
            dispatch={props.dispatch}
            />}
          />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
