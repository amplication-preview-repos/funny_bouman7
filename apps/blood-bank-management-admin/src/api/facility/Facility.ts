import { BloodTransfusion } from "../bloodTransfusion/BloodTransfusion";

export type Facility = {
  address: string | null;
  bloodTransfusions?: Array<BloodTransfusion>;
  contactNumber: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
