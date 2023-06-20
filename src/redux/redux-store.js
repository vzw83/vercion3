import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReduser from "./profile-reducer"
import dialogsReduser from "./dialogs-reducer"
import sidebarReduser from "./sidebar-reducer"
import usersReduser from "./users-reduser"


let reducers = combineReducers({
    
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser
})

let store = createStore(reducers)

window.store = store

export default store