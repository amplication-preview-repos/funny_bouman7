import { DistrictWhereUniqueInput } from "../district/DistrictWhereUniqueInput";
import { HospitalListRelationFilter } from "../hospital/HospitalListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type WardWhereInput = {
  district?: DistrictWhereUniqueInput;
  hospitals?: HospitalListRelationFilter;
  id?: StringFilter;
};
