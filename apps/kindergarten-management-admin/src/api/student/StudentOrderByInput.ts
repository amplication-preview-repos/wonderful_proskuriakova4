import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parentId?: SortOrder;
  updatedAt?: SortOrder;
};
