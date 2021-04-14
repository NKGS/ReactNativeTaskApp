import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";

export const reducer = combineReducers({
    login: loginReducer
});


// const rootReducer = (state, action) => {
//     // if (action.type === 'LOGOUT_SUCCESS') {
//     //     state = undefined;
//     //   }
//     return reducer(state, action)
// }

export default reducer;