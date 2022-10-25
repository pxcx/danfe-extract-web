import { UploadAction, UploadActionTypes, UploadState } from "./types";

const initialState: UploadState = {};

export const reducer = (
  state: UploadState = initialState,
  action: UploadAction
) => {
  switch (action.type) {
    case UploadActionTypes.UPDATE_PACKAGE_ID:
      return { ...state, packageID: action.payload };
    case UploadActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case UploadActionTypes.CLEAR_ERROR:
      return { ...state, error: undefined };
    case UploadActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};
