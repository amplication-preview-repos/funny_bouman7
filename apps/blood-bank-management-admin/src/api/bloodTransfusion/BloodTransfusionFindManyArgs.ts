import { BloodTransfusionWhereInput } from "./BloodTransfusionWhereInput";
import { BloodTransfusionOrderByInput } from "./BloodTransfusionOrderByInput";

export type BloodTransfusionFindManyArgs = {
  where?: BloodTransfusionWhereInput;
  orderBy?: Array<BloodTransfusionOrderByInput>;
  skip?: number;
  take?: number;
};
