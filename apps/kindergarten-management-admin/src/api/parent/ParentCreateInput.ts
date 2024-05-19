import { StudentCreateNestedManyWithoutParentsInput } from "./StudentCreateNestedManyWithoutParentsInput";

export type ParentCreateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  students?: StudentCreateNestedManyWithoutParentsInput;
};
