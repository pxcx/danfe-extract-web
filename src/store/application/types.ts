import { UserData } from "../../types/UserData";

export interface AppState {
  loading: boolean;
  securityToken?: string;
  userData?: UserData;
}

export enum AppActionTypes {
  LOADING = "APP_LOADING",
  LOADING_FINISHED = "APP_LOADING_FINISHED",
  UPDATE_SEC_TOKEN = "APP_UPDATE_SEC_TOKEN",
  CLEAR_SEC_TOKEN = "APP_CLEAR_SEC_TOKEN",
  UPDATE_USER_DATA = "APP_UPDATE_USER_DATA",
  CLEAR_USER_DATA = "APP_CLEAR_USER_DATA",
}

export interface AppActionLoading {
  type: AppActionTypes.LOADING;
}

export interface AppActionLoadingFinished {
  type: AppActionTypes.LOADING_FINISHED;
}

export interface AppActionUpdateSecToken {
  type: AppActionTypes.UPDATE_SEC_TOKEN;
  payload: string;
}

export interface AppActionClearSecToken {
  type: AppActionTypes.CLEAR_SEC_TOKEN;
}

export interface AppActionUpdateUserData {
  type: AppActionTypes.UPDATE_USER_DATA;
  payload: UserData;
}

export interface AppActionClearUserData {
  type: AppActionTypes.CLEAR_USER_DATA;
}

export type AppAction =
  | AppActionLoading
  | AppActionLoadingFinished
  | AppActionUpdateSecToken
  | AppActionClearSecToken
  | AppActionUpdateUserData
  | AppActionClearUserData;
