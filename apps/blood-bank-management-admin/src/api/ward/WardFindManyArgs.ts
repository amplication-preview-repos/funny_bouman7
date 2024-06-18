import { WardWhereInput } from "./WardWhereInput";
import { WardOrderByInput } from "./WardOrderByInput";

export type WardFindManyArgs = {
  where?: WardWhereInput;
  orderBy?: Array<WardOrderByInput>;
  skip?: number;
  take?: number;
};
