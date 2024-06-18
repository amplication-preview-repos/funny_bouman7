import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";
import { WardUpdateManyWithoutDistrictsInput } from "./WardUpdateManyWithoutDistrictsInput";

export type DistrictUpdateInput = {
  region?: RegionWhereUniqueInput | null;
  wards?: WardUpdateManyWithoutDistrictsInput;
};
