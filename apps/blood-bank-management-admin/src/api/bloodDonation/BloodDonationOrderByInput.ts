import { SortOrder } from "../../util/SortOrder";

export type BloodDonationOrderByInput = {
  bloodType?: SortOrder;
  createdAt?: SortOrder;
  donationDate?: SortOrder;
  donor?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
