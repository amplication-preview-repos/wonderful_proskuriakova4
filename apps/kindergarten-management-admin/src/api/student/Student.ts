import { Parent } from "../parent/Parent";

export type Student = {
  address: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  id: string;
  name: string | null;
  parent?: Parent | null;
  updatedAt: Date;
};
