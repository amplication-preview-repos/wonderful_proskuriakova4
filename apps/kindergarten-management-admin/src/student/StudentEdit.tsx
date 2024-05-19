import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ParentTitle } from "../parent/ParentTitle";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <DateTimeInput label="Date of Birth" source="dateOfBirth" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="parent.id" reference="Parent" label="Parent">
          <SelectInput optionText={ParentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
