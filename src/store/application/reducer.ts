import { AppAction, AppActionTypes, AppState } from "./types";

const initialState: AppState = {
  loading: false,
};

export const reducer = (
  state: AppState = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case AppActionTypes.LOADING:
      return { ...state, loading: true };
    case AppActionTypes.LOADING_FINISHED:
      return { ...state, loading: false };
    case AppActionTypes.UPDATE_SEC_TOKEN:
      return { ...state, securityToken: action.payload };
    case AppActionTypes.CLEAR_SEC_TOKEN:
      return { ...state, securityToken: undefined };
    case AppActionTypes.UPDATE_USER_DATA:
      return { ...state, userData: action.payload };
    case AppActionTypes.CLEAR_USER_DATA:
      return { ...state, userData: undefined };
    default:
      return state;
  }
};
