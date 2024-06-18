import { Hospital as THospital } from "../api/hospital/Hospital";

export const HOSPITAL_TITLE_FIELD = "id";

export const HospitalTitle = (record: THospital): string => {
  return record.id?.toString() || String(record.id);
};
