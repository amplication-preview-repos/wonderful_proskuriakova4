import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const StaffCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AssignedGroup" source="assignedGroup" />
        <TextInput label="ContactNumber" source="contactNumber" />
        <TextInput label="EmailAddress" source="emailAddress" type="email" />
        <TextInput label="FullName" source="fullName" />
      </SimpleForm>
    </Create>
  );
};
