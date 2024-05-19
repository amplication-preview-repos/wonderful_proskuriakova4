import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StaffList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StaffItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AssignedGroup" source="assignedGroup" />
        <TextField label="ContactNumber" source="contactNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="EmailAddress" source="emailAddress" />
        <TextField label="FullName" source="fullName" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
