import { DistrictWhereUniqueInput } from "../district/DistrictWhereUniqueInput";
import { HospitalCreateNestedManyWithoutWardsInput } from "./HospitalCreateNestedManyWithoutWardsInput";

export type WardCreateInput = {
  district?: DistrictWhereUniqueInput | null;
  hospitals?: HospitalCreateNestedManyWithoutWardsInput;
};
