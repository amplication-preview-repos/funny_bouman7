import { DistrictListRelationFilter } from "../district/DistrictListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type RegionWhereInput = {
  districts?: DistrictListRelationFilter;
  id?: StringFilter;
};
