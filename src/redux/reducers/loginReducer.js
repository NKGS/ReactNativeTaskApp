import { LOGIN } from "../actions/actionTypes"

export const initialState = {
    isLoggedIn: false,
    user: {}
}

export function loginReducer(state = initialState, action) {
  console.log('action - ',state)
    switch (action.type) {
      case LOGIN:
        return { ...state, isLoggedIn: true, user: {name: 'Nikita'} }
      default:
        return state
    }
}