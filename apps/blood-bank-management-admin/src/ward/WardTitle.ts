import { Ward as TWard } from "../api/ward/Ward";

export const WARD_TITLE_FIELD = "id";

export const WardTitle = (record: TWard): string => {
  return record.id?.toString() || String(record.id);
};
