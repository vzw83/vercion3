import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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

  let dialogsElement = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));
  let newMassageElement = React.createRef()

  let newMessage = () => {
     let text = newMassageElement.current.value;
     alert(text)   
  }
  return (
    <div className={s.dialogs}>
       <div>
        <textarea placeholder="вводи))" ref={newMassageElement}></textarea>
        <button onClick={newMessage} >добавить</button>
      </div>
       
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
