import { BloodRequest as TBloodRequest } from "../api/bloodRequest/BloodRequest";

export const BLOODREQUEST_TITLE_FIELD = "requester";

export const BloodRequestTitle = (record: TBloodRequest): string => {
  return record.requester?.toString() || String(record.id);
};
