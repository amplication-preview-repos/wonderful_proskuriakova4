import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeacherWhereInput = {
  assignedClass?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  email?: StringNullableFilter;
  emailAddress?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
