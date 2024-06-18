import { WardWhereUniqueInput } from "../ward/WardWhereUniqueInput";

export type HospitalCreateInput = {
  ward?: WardWhereUniqueInput | null;
};
