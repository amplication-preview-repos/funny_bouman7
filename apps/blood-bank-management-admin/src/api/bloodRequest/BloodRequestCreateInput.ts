export type BloodRequestCreateInput = {
  bloodType?: "Option1" | null;
  fulfilled?: boolean | null;
  quantity?: number | null;
  requestDate?: Date | null;
  requester?: string | null;
};