import { Region as TRegion } from "../api/region/Region";

export const REGION_TITLE_FIELD = "id";

export const RegionTitle = (record: TRegion): string => {
  return record.id?.toString() || String(record.id);
};
