import { DistrictWhereUniqueInput } from "../district/DistrictWhereUniqueInput";
import { HospitalUpdateManyWithoutWardsInput } from "./HospitalUpdateManyWithoutWardsInput";

export type WardUpdateInput = {
  district?: DistrictWhereUniqueInput | null;
  hospitals?: HospitalUpdateManyWithoutWardsInput;
};
