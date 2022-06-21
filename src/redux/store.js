import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Reducer } from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const myStore = createStore(Reducer, applyMiddleware(logger, thunk));

export default myStore;