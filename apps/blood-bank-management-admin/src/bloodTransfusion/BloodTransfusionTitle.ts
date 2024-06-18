import { BloodTransfusion as TBloodTransfusion } from "../api/bloodTransfusion/BloodTransfusion";

export const BLOODTRANSFUSION_TITLE_FIELD = "patient";

export const BloodTransfusionTitle = (record: TBloodTransfusion): string => {
  return record.patient?.toString() || String(record.id);
};
