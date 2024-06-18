import { BloodRequestWhereInput } from "./BloodRequestWhereInput";
import { BloodRequestOrderByInput } from "./BloodRequestOrderByInput";

export type BloodRequestFindManyArgs = {
  where?: BloodRequestWhereInput;
  orderBy?: Array<BloodRequestOrderByInput>;
  skip?: number;
  take?: number;
};
