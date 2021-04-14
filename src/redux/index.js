import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
// import AsyncStorage from '@react-native-community/async-storage'
import reducer from './reducers';
import { saga } from './sagas';

// const persistConfig = {
//     key: 'rootKeyPersist',
//     storage: AsyncStorage
// }

//const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// const persistor = persistStore(store);

sagaMiddleware.run(saga);

// export const reduxProvider = (Component) => (props) => {
//     <Provider store={store}>
//         {/* <PersistGate loading={null} persistor={persistor}> */}
//             <Component {...props} />
//         {/* </PersistGate> */}
//     </Provider>
// }


export const reduxProvider = (Component) => (props) => (
    <Provider store={store}>
       <Component {...props}/>
    </Provider>
);
