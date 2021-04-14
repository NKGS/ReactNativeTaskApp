
export const initialState = {
    isLoggedIn: false
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN':
        return { isLoggedIn: true }
      default:
        return state
    }
}