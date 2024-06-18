import { SortOrder } from "../../util/SortOrder";

export type BloodTransfusionOrderByInput = {
  bloodType?: SortOrder;
  createdAt?: SortOrder;
  facilityId?: SortOrder;
  id?: SortOrder;
  patient?: SortOrder;
  quantity?: SortOrder;
  transfusionDate?: SortOrder;
  updatedAt?: SortOrder;
};
