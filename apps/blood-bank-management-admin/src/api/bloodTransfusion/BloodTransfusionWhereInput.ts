import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BloodTransfusionWhereInput = {
  bloodType?: "Option1";
  facility?: FacilityWhereUniqueInput;
  id?: StringFilter;
  patient?: StringNullableFilter;
  quantity?: IntNullableFilter;
  transfusionDate?: DateTimeNullableFilter;
};
