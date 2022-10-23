import { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { backendService } from "../../services/backend";
import { appLoading, appLoadingFinished } from "../application/actions";
import {
  ReportActionClearError,
  ReportActionReset,
  ReportActionSetError,
  ReportActionTypes,
} from "./types";

export const retrieveReportData = (packageID: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(appLoading());
    backendService
      .get(`packages/${packageID}/extract-items`)
      .then((response: AxiosResponse) => {
        dispatch({
          type: ReportActionTypes.UPDATE_REPORT_DATA,
          payload: response.data,
        });
      })
      .catch((error: AxiosError) => {
        dispatch({
          type: ReportActionTypes.SET_ERROR,
          payload: error.message,
        });
      })
      .finally(() => dispatch(appLoadingFinished()));
  };
};

export const setError = (errorMsg: string) => {
  return (dispatch: Dispatch<ReportActionSetError>) => {
    dispatch({
      type: ReportActionTypes.SET_ERROR,
      payload: errorMsg,
    });
  };
};

export const clearError = () => {
  return (dispatch: Dispatch<ReportActionClearError>) => {
    dispatch({
      type: ReportActionTypes.CLEAR_ERROR,
    });
  };
};

export const reset = () => {
  return (dispatch: Dispatch<ReportActionReset>) => {
    dispatch({
      type: ReportActionTypes.RESET,
    });
  };
};
