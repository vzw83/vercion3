const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
  newMessageBody: "",
};

const dialogsReduser = (state = initialState, action) => {
  
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 
       return {
        ...state,
        newMessageBody: action.body        
      };
      
      
    

    case SEND_MESSAGE: 
    let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages,{ id: 6, message: body }],
      };
      
      
      
    
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReduser;
