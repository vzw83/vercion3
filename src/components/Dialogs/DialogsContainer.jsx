// import React from "react";
// import s from "./Dialogs.module.css";
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext.js!!!!";
import { connect } from "react-redux";

// const DialogsContainer = () => {
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

  // let dialogsElement = state.dialogs.map((dialog) => (
  //   <DialogItem name={dialog.name} id={dialog.id} />
  // ));

  // let messagesElement = state.messages.map((message) => (
  //   <Message message={message.message} />
  // ));

  // let newMessageBody = state.newMessageBody;

  // let newMassageElement = React.createRef();

  // let newMessage = () => {
  //   let text = newMassageElement.current.value;
  //   alert(text);
  // };

//   let onSendMessageClick = () => {
//     store.dispatch(sendMessageCreator());
//   };
//   let onNewMessageChange = (boby) => {
//     store.dispatch(updateNewMessageBodyCreator(boby));
//   };
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         <Dialogs
//           updateNewMessageBody={onNewMessageChange}
//           sendMessage={onSendMessageClick}
//           dialogsPage={store.getState().dialogsPage}
//         />;
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (boby) => {
      dispatch(updateNewMessageBodyCreator(boby));
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
