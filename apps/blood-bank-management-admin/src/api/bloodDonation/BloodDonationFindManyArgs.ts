import { BloodDonationWhereInput } from "./BloodDonationWhereInput";
import { BloodDonationOrderByInput } from "./BloodDonationOrderByInput";

export type BloodDonationFindManyArgs = {
  where?: BloodDonationWhereInput;
  orderBy?: Array<BloodDonationOrderByInput>;
  skip?: number;
  take?: number;
};
