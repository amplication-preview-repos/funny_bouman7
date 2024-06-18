import { DistrictCreateNestedManyWithoutRegionsInput } from "./DistrictCreateNestedManyWithoutRegionsInput";

export type RegionCreateInput = {
  districts?: DistrictCreateNestedManyWithoutRegionsInput;
};
