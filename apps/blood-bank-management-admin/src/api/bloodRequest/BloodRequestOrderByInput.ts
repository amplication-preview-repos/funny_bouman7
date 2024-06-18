import { SortOrder } from "../../util/SortOrder";

export type BloodRequestOrderByInput = {
  bloodType?: SortOrder;
  createdAt?: SortOrder;
  fulfilled?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  requestDate?: SortOrder;
  requester?: SortOrder;
  updatedAt?: SortOrder;
};
