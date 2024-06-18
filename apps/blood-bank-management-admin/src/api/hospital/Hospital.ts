import { Ward } from "../ward/Ward";

export type Hospital = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  ward?: Ward | null;
};
