import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";
import { WardCreateNestedManyWithoutDistrictsInput } from "./WardCreateNestedManyWithoutDistrictsInput";

export type DistrictCreateInput = {
  region?: RegionWhereUniqueInput | null;
  wards?: WardCreateNestedManyWithoutDistrictsInput;
};
