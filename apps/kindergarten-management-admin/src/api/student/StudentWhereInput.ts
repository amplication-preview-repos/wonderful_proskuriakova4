import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";

export type StudentWhereInput = {
  address?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  parent?: ParentWhereUniqueInput;
};
