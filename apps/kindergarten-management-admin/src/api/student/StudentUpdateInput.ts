import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";

export type StudentUpdateInput = {
  address?: string | null;
  dateOfBirth?: Date | null;
  name?: string | null;
  parent?: ParentWhereUniqueInput | null;
};
