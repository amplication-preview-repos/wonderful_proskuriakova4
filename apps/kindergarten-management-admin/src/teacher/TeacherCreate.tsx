import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TeacherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AssignedClass" source="assignedClass" />
        <TextInput label="ContactNumber" source="contactNumber" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="EmailAddress" source="emailAddress" type="email" />
        <TextInput label="FullName" source="fullName" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone Number" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
