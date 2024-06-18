import { Facility } from "../facility/Facility";

export type BloodTransfusion = {
  bloodType?: "Option1" | null;
  createdAt: Date;
  facility?: Facility | null;
  id: string;
  patient: string | null;
  quantity: number | null;
  transfusionDate: Date | null;
  updatedAt: Date;
};
