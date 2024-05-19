import { Student } from "../student/Student";

export type Parent = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  students?: Array<Student>;
  updatedAt: Date;
};
