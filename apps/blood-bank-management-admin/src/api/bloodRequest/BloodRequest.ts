export type BloodRequest = {
  bloodType?: "Option1" | null;
  createdAt: Date;
  fulfilled: boolean | null;
  id: string;
  quantity: number | null;
  requestDate: Date | null;
  requester: string | null;
  updatedAt: Date;
};
