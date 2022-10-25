import { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "react";
import { backendService } from "../../services/backend";
import { appLoading, appLoadingFinished } from "../application/actions";
import {
  UploadActionClearError,
  UploadActionReset,
  UploadActionSetError,
  UploadActionTypes,
} from "./types";

export const uploadPackage = (packageFile: File) => {
  return (dispatch: Dispatch<any>) => {
    const formData = new FormData();
    formData.append("danfePackage", packageFile);

    dispatch(appLoading());
    backendService
      .post("/upload-package", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((reponse: AxiosResponse) => {
        dispatch({
          type: UploadActionTypes.UPDATE_PACKAGE_ID,
          payload: reponse.data.packageID,
        });
      })
      .catch((error: AxiosError) => {
        dispatch(setError(error.message));
      })
      .finally(() => dispatch(appLoadingFinished()));
  };
};

export const setError = (error: string) => {
  return (dispatch: Dispatch<UploadActionSetError>) => {
    dispatch({
      type: UploadActionTypes.SET_ERROR,
      payload: error,
    });
  };
};

export const clearError = () => {
  return (dispatch: Dispatch<UploadActionClearError>) => {
    dispatch({
      type: UploadActionTypes.CLEAR_ERROR,
    });
  };
};

export const reset = () => {
  return (dispatch: Dispatch<UploadActionReset>) => {
    dispatch({
      type: UploadActionTypes.RESET,
    });
  };
};
