import { BloodTransfusionCreateNestedManyWithoutFacilitiesInput } from "./BloodTransfusionCreateNestedManyWithoutFacilitiesInput";

export type FacilityCreateInput = {
  address?: string | null;
  bloodTransfusions?: BloodTransfusionCreateNestedManyWithoutFacilitiesInput;
  contactNumber?: string | null;
  name?: string | null;
  typeField?: "Option1" | null;
};
