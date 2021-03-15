import React, { Component, useReducer, useContext } from 'react';

const MyContext = React.createContext()
export const MyProvider = MyContext.Provider;

export function connect(mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        return function () {
            const {state, dispatch} = useContext(MyContext)
            const stateToProps = mapStateToProps(state)
            const dispatchToProps = mapDispatchToProps(dispatch)
            const props = {...props, ...stateToProps, ...dispatchToProps}
            return (
                <Component {...props} />
            )
        }
    }
}