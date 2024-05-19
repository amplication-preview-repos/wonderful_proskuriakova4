import { StudentUpdateManyWithoutParentsInput } from "./StudentUpdateManyWithoutParentsInput";

export type ParentUpdateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  students?: StudentUpdateManyWithoutParentsInput;
};
