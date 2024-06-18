import { BloodTransfusionUpdateManyWithoutFacilitiesInput } from "./BloodTransfusionUpdateManyWithoutFacilitiesInput";

export type FacilityUpdateInput = {
  address?: string | null;
  bloodTransfusions?: BloodTransfusionUpdateManyWithoutFacilitiesInput;
  contactNumber?: string | null;
  name?: string | null;
  typeField?: "Option1" | null;
};
