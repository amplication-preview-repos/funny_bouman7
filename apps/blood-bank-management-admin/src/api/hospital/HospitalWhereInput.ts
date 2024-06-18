import { StringFilter } from "../../util/StringFilter";
import { WardWhereUniqueInput } from "../ward/WardWhereUniqueInput";

export type HospitalWhereInput = {
  id?: StringFilter;
  ward?: WardWhereUniqueInput;
};
