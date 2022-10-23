import { ReportItem } from "../../types/ReportItem";

export interface ReportState {
  reportData: Array<ReportItem>;
  packageID?: string;
  error?: string;
}

export interface RetrieveReportServiceOutput {
  packageID: string;
  extract: Array<ReportItem>;
}

export enum ReportActionTypes {
  UPDATE_REPORT_DATA = "REPORT_UPDATE_REPORT_DATA",
  SET_ERROR = "SET_ERROR",
  CLEAR_ERROR = "CLEAR_ERROR",
  RESET = "REPORT_RESET",
}

export interface ReportActionUpdateReportData {
  type: ReportActionTypes.UPDATE_REPORT_DATA;
  payload: RetrieveReportServiceOutput;
}

export interface ReportActionSetError {
  type: ReportActionTypes.SET_ERROR;
  payload: string;
}

export interface ReportActionClearError {
  type: ReportActionTypes.CLEAR_ERROR;
}

export interface ReportActionReset {
  type: ReportActionTypes.RESET;
}

export type ReportAction =
  | ReportActionUpdateReportData
  | ReportActionSetError
  | ReportActionClearError
  | ReportActionReset;
