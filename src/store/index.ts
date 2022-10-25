import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import Application from "./application";
import Report from "./package-report";
import Upload from "./package-upload";

const rootReducer = combineReducers({
  application: Application.reducer,
  packageReport: Report.reducer,
  packageUpload: Upload.reducer,
});

export type State = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const actionCreators = {
  application: Application.actionCreators,
  packageReport: Report.actionCreators,
  packageUpload: Upload.actionCreators,
};
