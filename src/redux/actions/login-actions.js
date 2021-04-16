import { LOGIN, TEST_NAVIGATION } from "./actionTypes"

export const loginAction = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}

export const testNaivgation = () => {
    return {
        type: TEST_NAVIGATION
    }
}