import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
// import store from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import store from "./redux/State";
// import { addPost } from "./redux/State";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs/*"
            element={
              <DialogsContainer
              // store={props.store}
              // state={props.state.dialogsPage}
              // messages={props.state.dialogsPage.messages}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
              // store={props.store}
              />
            }
          />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
