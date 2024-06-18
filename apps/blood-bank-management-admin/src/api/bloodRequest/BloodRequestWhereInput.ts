import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BloodRequestWhereInput = {
  bloodType?: "Option1";
  fulfilled?: BooleanNullableFilter;
  id?: StringFilter;
  quantity?: IntNullableFilter;
  requestDate?: DateTimeNullableFilter;
  requester?: StringNullableFilter;
};
