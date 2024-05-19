import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";

export type StudentCreateInput = {
  address?: string | null;
  dateOfBirth?: Date | null;
  name?: string | null;
  parent?: ParentWhereUniqueInput | null;
};
