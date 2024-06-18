import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";

export type BloodTransfusionUpdateInput = {
  bloodType?: "Option1" | null;
  facility?: FacilityWhereUniqueInput | null;
  patient?: string | null;
  quantity?: number | null;
  transfusionDate?: Date | null;
};
