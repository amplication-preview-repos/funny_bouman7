import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BloodTransfusionListRelationFilter } from "../bloodTransfusion/BloodTransfusionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type FacilityWhereInput = {
  address?: StringNullableFilter;
  bloodTransfusions?: BloodTransfusionListRelationFilter;
  contactNumber?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
