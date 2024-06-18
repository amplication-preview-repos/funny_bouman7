import { StringFilter } from "../../util/StringFilter";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";
import { WardListRelationFilter } from "../ward/WardListRelationFilter";

export type DistrictWhereInput = {
  id?: StringFilter;
  region?: RegionWhereUniqueInput;
  wards?: WardListRelationFilter;
};
