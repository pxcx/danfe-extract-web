import { Dispatch } from "redux";
import { UserData } from "src/types/UserData";
import {
  AppActionClearSecToken,
  AppActionLoading,
  AppActionLoadingFinished,
  AppActionTypes,
  AppActionUpdateSecToken,
  AppActionUpdateUserData,
} from "./types";

export const appLoading = () => {
  return (dispatch: Dispatch<AppActionLoading>) => {
    dispatch({ type: AppActionTypes.LOADING });
  };
};

export const appLoadingFinished = () => {
  return (dispatch: Dispatch<AppActionLoadingFinished>) => {
    dispatch({ type: AppActionTypes.LOADING_FINISHED });
  };
};

export const clearSecurityToken = () => {
  return (dispatch: Dispatch<AppActionClearSecToken>) => {
    dispatch({ type: AppActionTypes.CLEAR_SEC_TOKEN });
  };
};

export const updateSecurityToken = (newToken: string) => {
  return (dispatch: Dispatch<AppActionUpdateSecToken>) => {
    dispatch({ type: AppActionTypes.UPDATE_SEC_TOKEN, payload: newToken });
  };
};

export const clearUserData = () => {
  return (dispatch: Dispatch<AppActionClearSecToken>) => {
    dispatch({ type: AppActionTypes.CLEAR_SEC_TOKEN });
  };
};

export const updateUserData = (userData: UserData) => {
  return (dispatch: Dispatch<AppActionUpdateUserData>) => {
    dispatch({ type: AppActionTypes.UPDATE_USER_DATA, payload: userData });
  };
};
