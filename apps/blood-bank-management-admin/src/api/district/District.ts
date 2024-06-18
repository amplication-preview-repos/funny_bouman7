import { Region } from "../region/Region";
import { Ward } from "../ward/Ward";

export type District = {
  createdAt: Date;
  id: string;
  region?: Region | null;
  updatedAt: Date;
  wards?: Array<Ward>;
};
