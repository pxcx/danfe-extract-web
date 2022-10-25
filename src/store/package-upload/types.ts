import { Dispatch } from "react";

export interface UploadState {
  packageID?: string;
  error?: string;
}

export enum UploadActionTypes {
  UPDATE_PACKAGE_ID = "UPDATE_PACKAGE_ID",
  SET_ERROR = "SET_ERROR",
  CLEAR_ERROR = "CLEAR_ERROR",
  RESET = "UPLOAD_RESET",
}

export interface UploadActionUpdatePackageID {
  type: UploadActionTypes.UPDATE_PACKAGE_ID;
  payload: string;
}

export interface UploadActionSetError {
  type: UploadActionTypes.SET_ERROR;
  payload: string;
}

export interface UploadActionClearError {
  type: UploadActionTypes.CLEAR_ERROR;
}

export interface UploadActionReset {
  type: UploadActionTypes.RESET;
}

export type UploadActionServiceError = Dispatch<UploadActionSetError>;

export type UploadAction =
  | UploadActionUpdatePackageID
  | UploadActionSetError
  | UploadActionClearError
  | UploadActionReset;
