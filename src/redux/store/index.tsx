import {createStore} from "redux";
import {rootState} from "../reducers";

export const store = createStore(rootState);