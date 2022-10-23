import { ReportAction, ReportActionTypes, ReportState } from "./types";

const initialState: ReportState = {
  reportData: [],
};

export const reducer = (
  state: ReportState = initialState,
  action: ReportAction
) => {
  switch (action.type) {
    case ReportActionTypes.UPDATE_REPORT_DATA:
      return {
        ...state,
        packageID: action.payload.packageID,
        reportData: action.payload.extract,
      };
    case ReportActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case ReportActionTypes.CLEAR_ERROR:
      return { ...state, error: undefined };
    case ReportActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};
