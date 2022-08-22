import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({//bolor arandzin komponentneri reducernery miacrel enq rootReducer-in
  likesReducer,
  inputReducer,
  commentsReducer,
  appReducer,
});
