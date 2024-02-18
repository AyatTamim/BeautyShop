import counterReducer from "../reducers"
counterReducer
import { creatStore } from "redux"

const store = creatStore(counterReducer);

export default store