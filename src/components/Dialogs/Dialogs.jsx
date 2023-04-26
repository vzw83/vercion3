import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Вова" },
    { id: 2, name: "Оля" },
    { id: 3, name: "Дима" },
    { id: 4, name: "Андрей" },
    { id: 5, name: "Семён" },
  ];

  let dialogsElement = dialogsData
    .map((dialog) => (<DialogItem name={dialog.name} id={dialog.id} />));

  let messagesData = [
    { id: 1, message: "привет" },
    { id: 2, message: "как твои дела?" },
    { id: 3, message: "Чем занимаешься?" },
    { id: 4, message: "YO" },
    { id: 5, message: "YO" },
  ];
  let messagesElement = messagesData.map((message) => (<Message message={message.message}  />))
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElement}
        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name="Оля" id="2" />
        <DialogItem name="Дима" id="3" />
        <DialogItem name="Андрей" id="4" />
        <DialogItem name="Семён" id="5" /> */}
      </div>
      <div className={s.messages}>
        {messagesElement}
        {/* <Message message={messagesData[0].message}  />
        <Message message="как твои дела?" />
        <Message message="Чем занимаешься?" />
        <Message message="YO" />
        <Message message="YO" /> */}
      </div>
    </div>
  );
};

export default Dialogs;
