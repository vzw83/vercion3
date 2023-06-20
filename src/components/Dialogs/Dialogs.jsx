import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
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

  let state = props.dialogsPage

  let dialogsElement = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElement = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let newMessageBody = state.newMessageBody;

  // let newMassageElement = React.createRef();

  // let newMessage = () => {
  //   let text = newMassageElement.current.value;
  //   alert(text);
  // };

  let onSendMessageClick = () => {
    props.sendMessage()
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
    // props.store.dispatch(updateNewMessageBodyCreator(body))
  }
  return (
    <div className={s.dialogs}>
      

      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <div><textarea value={newMessageBody}
                       onChange={onNewMessageChange}
                       placeholder="вводи))"></textarea></div>
        <div><button onClick={onSendMessageClick}>добавить</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
