import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StaffWhereInput = {
  assignedGroup?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  emailAddress?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
};
