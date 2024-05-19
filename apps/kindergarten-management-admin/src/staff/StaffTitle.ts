import { Staff as TStaff } from "../api/staff/Staff";

export const STAFF_TITLE_FIELD = "fullName";

export const StaffTitle = (record: TStaff): string => {
  return record.fullName?.toString() || String(record.id);
};
