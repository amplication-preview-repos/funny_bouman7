import { BloodDonation as TBloodDonation } from "../api/bloodDonation/BloodDonation";

export const BLOODDONATION_TITLE_FIELD = "donor";

export const BloodDonationTitle = (record: TBloodDonation): string => {
  return record.donor?.toString() || String(record.id);
};
