import { District as TDistrict } from "../api/district/District";

export const DISTRICT_TITLE_FIELD = "id";

export const DistrictTitle = (record: TDistrict): string => {
  return record.id?.toString() || String(record.id);
};
