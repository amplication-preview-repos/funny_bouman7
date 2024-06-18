import { District } from "../district/District";
import { Hospital } from "../hospital/Hospital";

export type Ward = {
  createdAt: Date;
  district?: District | null;
  hospitals?: Array<Hospital>;
  id: string;
  updatedAt: Date;
};
