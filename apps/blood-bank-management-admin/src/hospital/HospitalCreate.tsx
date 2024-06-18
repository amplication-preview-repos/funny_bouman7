import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WardTitle } from "../ward/WardTitle";

export const HospitalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="ward.id" reference="Ward" label="Ward">
          <SelectInput optionText={WardTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
