import { District } from "../district/District";

export type Region = {
  createdAt: Date;
  districts?: Array<District>;
  id: string;
  updatedAt: Date;
};
