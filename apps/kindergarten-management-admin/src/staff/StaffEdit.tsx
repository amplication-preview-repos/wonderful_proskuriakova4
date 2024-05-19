import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StaffEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AssignedGroup" source="assignedGroup" />
        <TextInput label="ContactNumber" source="contactNumber" />
        <TextInput label="EmailAddress" source="emailAddress" type="email" />
        <TextInput label="FullName" source="fullName" />
      </SimpleForm>
    </Edit>
  );
};
