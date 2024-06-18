import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BloodDonationWhereInput = {
  bloodType?: "Option1";
  donationDate?: DateTimeNullableFilter;
  donor?: StringNullableFilter;
  id?: StringFilter;
  quantity?: IntNullableFilter;
};
