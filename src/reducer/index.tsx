
export const initialState = {
    Books: 'Dan Brown: Inferno',
    isLoggedIn: false
}

export function reducerFunction(state, action) {
    switch (action.type) {
      case 'LOGIN':
        return { isLoggedIn: true }
      default:
        return state
    }
}