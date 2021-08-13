import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

export const store = createStore(Reducer, applyMiddleware(thunk));

// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import { Reducer } from "./Reducer";
// import { loadState, saveState } from "./LocalStorage";

// const persistedState = loadState();
// export const store = createStore(
//   Reducer,
//   persistedState,
//   applyMiddleware(thunk)
// );

// store.subscribe(() => {
//   saveState(store.getState());
// });
