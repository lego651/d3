import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import storageSession from 'redux-persist/lib/storage/session'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import rootReducer from '../reducers'

const persistConfig = {
	key: 'root',
	storage: storageSession,
	stateReconciler: autoMergeLevel2,
  blacklist: ['roomInfo']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// v1: store + redux-thunk, no redux-persist version
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunkMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
//   // compose(
//   //   applyMiddleware(thunkMiddleware)
//   // )
// )
//
// export default store

// v2: store + redux-thunk + redux-persist official recommended version
// export default () => {
// 	let store = createStore(
//     persistedReducer,
//     rootReducer,
//     compose(
//       applyMiddleware(thunkMiddleware),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
// 	let persistor = persistStore(store);
// 	return { store, persistor };
// }


export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export const persistor = persistStore(store);
